# 🧠 Kanban Go App

A fullstack **Kanban board** with a Go backend, WebSocket real-time sync, PostgreSQL storage, and modern React frontend — all powered by Docker.

---

## 🚀 Features

- ✅ RESTful API for managing tasks
- ✅ WebSocket broadcast for real-time updates (`task_created`, `task_updated`, `task_deleted`)
- ✅ PostgreSQL database (Dockerized)
- ✅ Modern frontend (React + Vite + Tailwind + TanStack Query + Zustand)
- ✅ Clean Evo Small architecture
- ✅ Hot reload dev setup via Air (Go) and Vite (React)
- ✅ Unified production build via Docker Compose

---

## 🧰 Tech Stack

| Layer     | Tech                                |
|-----------|-------------------------------------|
| Backend   | Go 1.23, Gin, GORM, gorilla/ws      |
| Frontend  | React 18+, Vite, Zustand, Tailwind, TanStack Query |
| Database  | PostgreSQL                          |
| DevTools  | Docker, Docker Compose, Air         |

---

## 📦 Project Structure

```
kanban-app/
├── backend/                # Go backend
│   ├── main.go
│   ├── .env.example
│   ├── Dockerfile
│   ├── Dockerfile.dev
│   ├── .air.toml
│   ├── handlers/
│   ├── models/
│   ├── db/
│   ├── ws/
│   └── router/
├── frontend/               # React frontend
│   ├── src/
│   │   ├── app/
│   │   ├── features/
│   │   └── shared/
│   ├── Dockerfile
│   ├── index.html
│   └── nginx.conf
├── docker-compose.yml
```

---

## ⚙️ Environment Setup

### 1. Copy environment file

```bash
cp backend/.env.example backend/.env
```

---

## 🧪 Development (with hot reload)

Start dev containers (Air for Go, Vite for React):

```bash
docker compose up --build backend-dev
```

Then in another terminal:

```bash
npm install
npm run dev
```

---

## 🚀 Full Production Build

To build and run everything (backend + frontend + postgres):

```bash
docker compose up --build
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:8080
- WebSocket: ws://localhost:8080/ws

---

## 🔌 Nginx Proxy Setup

The `frontend/nginx.conf` includes:

- `/api/*` → backend
- `/ws` → backend WebSocket

Handled by Docker's internal network (`proxy_pass http://backend:8080;`)

---

## 📖 API Endpoints

| Method | Endpoint       | Description           |
|--------|----------------|-----------------------|
| GET    | `/tasks`       | Get all tasks         |
| POST   | `/tasks`       | Create new task       |
| PATCH  | `/tasks/:id`   | Update task           |
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
    "status": "todo",
    "color": "#60a5fa"
  }
}
```

---

## ✅ Todo / Next Steps

- [x] Frontend (React + Zustand + Tailwind)
- [x] WebSocket sync
- [x] Dockerized fullstack setup
- [ ] Drag & drop with dnd-kit
- [ ] CI/CD (GitHub Actions)
- [ ] User auth
- [ ] Multi-board support
- [ ] Unit / e2e tests

---

## 📄 License

MIT © 2025 Maxfri
