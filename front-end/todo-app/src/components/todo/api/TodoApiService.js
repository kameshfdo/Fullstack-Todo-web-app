import { apiClient } from './ApiClient'

//here using api client reduse biollorplate code
//rest api calls
//get all todos
export const retrieveAllTodosForUsernameApi
    = (username) => apiClient.get(`/users/${username}/todos`)
//delete specific todo
export const deleteTodoApi
    = (username, id) => apiClient.delete(`/users/${username}/todos/${id}`)
//get specific todo
export const retrieveTodoApi
    = (username, id) => apiClient.get(`/users/${username}/todos/${id}`)
//update specific todo
export const updateTodoApi
    = (username, id, todo) => apiClient.put(`/users/${username}/todos/${id}`, todo)
//create todo
export const createTodoApi
    = (username,  todo) => apiClient.post(`/users/${username}/todos`, todo)
