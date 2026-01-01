import api from './api'

export const getTasks = () => api.get('tasks/')

export const createTask = (title) =>
    api.post('tasks/', { title })

export const deleteTask = (id) =>
    api.delete(`tasks/${id}/`)