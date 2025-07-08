# 🗂️ Kanban Backend (Go)

Backend-приложение на Go для Kanban-доски с поддержкой WebSocket-уведомлений в реальном времени.

## 🚀 Возможности

- REST API для управления задачами
- WebSocket для обновлений в реальном времени
- Хранение задач в SQLite (через GORM)
- Чистая архитектура и готовность к расширению

---

## 🧭 Стек

- [Go](https://go.dev/) `1.21+`
- [Gin](https://github.com/gin-gonic/gin) — HTTP-сервер
- [GORM](https://gorm.io/) — ORM для Go
- [gorilla/websocket](https://github.com/gorilla/websocket) — WebSocket
- SQLite — локальная БД

---

## 🛠 Установка и запуск

```bash
# Клонировать репозиторий
git clone https://github.com/yaroslav/kanban-backend.git
cd kanban-backend/backend

# Инициализировать модули
go mod tidy

# Запустить сервер
go run main.go
