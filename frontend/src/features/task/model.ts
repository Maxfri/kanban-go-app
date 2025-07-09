import { create } from 'zustand'
import { useEffect } from 'react'
import type { Task } from '@/shared/types/task'

type WsEvent = {
  type: 'task_created' | 'task_updated' | 'task_deleted'
  payload: Task
}

type State = {
  syncFromWs: (e: WsEvent) => void
  tasks: Task[]
}

export const useTaskStore = create<State>((set) => ({
  tasks: [],
  syncFromWs: (e) =>
    set((state) => {
      const { type, payload } = e
      if (type === 'task_created') return { tasks: [...state.tasks, payload] }
      if (type === 'task_updated')
        return { tasks: state.tasks.map((t) => (t.id === payload.id ? payload : t)) }
      if (type === 'task_deleted')
        return { tasks: state.tasks.filter((t) => t.id !== payload.id) }
      return state
    }),
}))

export const useTaskWebSocket = () => {
  const sync = useTaskStore((s) => s.syncFromWs)

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080/ws')
    ws.onmessage = (msg) => {
      try {
        const data = JSON.parse(msg.data)
        sync(data)
      } catch (e) {
        console.error(e)
      }
    }
    return () => ws.close()
  }, [])
}
