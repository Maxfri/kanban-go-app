# 🧠 Kanban Go App

A fullstack **Kanban board** with a Go backend, real-time updates over WebSocket, PostgreSQL storage, and hot-reloading dev setup via Docker.

---

## 🚀 Features

- ✅ RESTful API for managing tasks
- ✅ WebSocket broadcast for real-time updates (`task_created`, `task_updated`, `task_deleted`)
- ✅ PostgreSQL database (Dockerized)
- ✅ Auto-restart server on file change with [`air`](https://github.com/cosmtrek/air)
- ✅ Clean architecture and modular code

---

## 🧰 Tech Stack

| Layer     | Tech                    |
|-----------|-------------------------|
| Backend   | Go 1.23, Gin, GORM      |
| Realtime  | gorilla/websocket       |
| Database  | PostgreSQL              |
| DevTools  | Docker, Docker Compose, Air |

---

## 📦 Project Structure

```
kanban-app/
├── backend/                # Go backend
│   ├── main.go
│   ├── .env.example
│   ├── Dockerfile          # Production
│   ├── Dockerfile.dev      # Development (Air)
│   ├── .air.toml
│   ├── handlers/           # API controllers
│   ├── models/             # DB schemas
│   ├── db/                 # DB connection
│   ├── ws/                 # WebSocket hub
│   └── router/             # Route setup
├── docker-compose.yml
```

---

## 🛠 Local Development (with hot reload)

1. Copy and edit `.env`:

```bash
cp backend/.env.example backend/.env
```

2. Start dev containers:

```bash
docker compose up --build backend-dev
```

3. API is now available at:  
   → [http://localhost:8080/tasks](http://localhost:8080/tasks)

4. WebSocket:  
   → `ws://localhost:8080/ws`

---

## 🛠 Production Build (optional)

```bash
docker compose up --build backend
```

---

## 📖 API Endpoints

| Method | Endpoint       | Description           |
|--------|----------------|-----------------------|
| GET    | `/tasks`       | Get all tasks         |
| POST   | `/tasks`       | Create new task       |
| PATCH  | `/tasks/:id`   | Update task status    |
| DELETE | `/tasks/:id`   | Delete task           |

**Payload example:**
```json
{
  "title": "Make frontend",
  "status": "todo",
  "color": "#60a5fa"
}
```

---

## 🔁 WebSocket Messages

```json
{
  "type": "task_created",
  "payload": {
    "id": 1,
    "title": "Make frontend",
    "status": "todo"
  }
}
```

---

## ✅ Todo / Next Steps

- [ ] Frontend (React + Zustand + Tailwind)
- [ ] CI/CD (GitHub Actions)
- [ ] Auth / login
- [ ] Multi-board support

---

## 📄 License

MIT © 2025 Yaroslav
