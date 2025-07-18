# backend/Dockerfile

FROM golang:1.23.5

WORKDIR /app

COPY go.mod ./
COPY go.sum ./
RUN go mod download

COPY . .

# Компилируем бинарник (без CGO)
RUN go build -o main .

# Делаем бинарник исполняемым
RUN chmod +x main

EXPOSE 8080

CMD ["./main"]
