import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

const api = axios.create({
  baseURL,
  withCredentials: true,
})

export const login = (data) => api.post("/v1/users/login", data);
export const register = (data) => api.post("/v1/users/signup", data);
export const logout = () => api.post("/v1/users/logout");
export const postComplaint = (payload) => api.post('/complaint', payload)
export const getComplaints = () => api.get('/allComplaints')

export default api
