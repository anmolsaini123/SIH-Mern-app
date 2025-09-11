import React, { createContext, useContext, useState, useEffect } from 'react'
import * as api from '../api'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    let mounted = true
    const init = async () => {
      try {
        const res = await api.getMe()
        const payload = res.data?.data || res.data?.user || res.data
        if (mounted) setUser(payload)
      } catch {
        if (mounted) setUser(null)
      } finally {
        if (mounted) setLoading(false)
      }
    }
    init()
    return () => mounted = false
  }, [])

  const login = async (credentials) => {
    const res = await api.login(credentials)
    const payload = res.data?.data || res.data?.user || res.data
    setUser(payload)
    navigate('/HomePage')
    return res
  }

  const register = async (payload) => {
    const res = await api.register(payload)
    const user = res.data?.data || res.data?.user || res.data
    setUser(user)
    navigate('/HomePage')
    return res
  }

  const logout = async () => {
    try { await api.logout() } finally {
      setUser(null)
      navigate('/login')
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
