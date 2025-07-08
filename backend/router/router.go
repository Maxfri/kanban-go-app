package router

import (
	"kanban-backend/handlers"
	"kanban-backend/ws"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(r *gin.Engine) {
	r.GET("/tasks", handlers.GetTasks)
	r.POST("/tasks", handlers.CreateTask)
	r.PATCH("/tasks/:id", handlers.UpdateTask)
	r.DELETE("/tasks/:id", handlers.DeleteTask)

	r.GET("/ws", ws.HandleConnections)

	go ws.RunHub()
}
