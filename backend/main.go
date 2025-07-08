package main

import (
	"log"
	"os"

	"kanban-backend/db"
	"kanban-backend/router"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	// Загружаем переменные из .env
	if err := godotenv.Load(); err != nil {
		log.Println("⚠️  .env file not found, falling back to system env")
	}

	// Проверим, что DSN есть
	if os.Getenv("POSTGRES_DSN") == "" {
		log.Fatal("❌ POSTGRES_DSN is not set")
	}

	db.ConnectDatabase()

	r := gin.Default()
	router.SetupRoutes(r)

	r.Run(":8080")
}
