package ws

import (
	"encoding/json"
	"log"
	"net/http"
	"sync"

	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
)

type message struct {
	Type    string      `json:"type"`
	Payload interface{} `json:"payload"`
}

var (
	clients   = make(map[*websocket.Conn]bool)
	broadcast = make(chan message)
	upgrader  = websocket.Upgrader{
		CheckOrigin: func(r *http.Request) bool { return true },
	}
	mu sync.Mutex
)

func HandleConnections(c *gin.Context) {
	wsConn, err := upgrader.Upgrade(c.Writer, c.Request, nil)
	if err != nil {
		log.Println(err)
		return
	}

	mu.Lock()
	clients[wsConn] = true
	mu.Unlock()
}

func Broadcast(event string, payload interface{}) {
	broadcast <- message{Type: event, Payload: payload}
}

func RunHub() {
	for {
		msg := <-broadcast
		data, _ := json.Marshal(msg)

		mu.Lock()
		for client := range clients {
			err := client.WriteMessage(websocket.TextMessage, data)
			if err != nil {
				client.Close()
				delete(clients, client)
			}
		}
		mu.Unlock()
	}
}
