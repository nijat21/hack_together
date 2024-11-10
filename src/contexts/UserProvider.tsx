import React, { useState, useEffect } from 'react'
import { v4 as uniqueKey } from 'uuid'

const UserContext = React.createContext(null)

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState('')

  const getUserId = () => {
    const stored = localStorage.getItem('userId')
    if (stored) return stored

    const newId = uniqueKey()
    localStorage.setItem('userId', newId)
    return newId
  }

  useEffect(() => {
    setUserId(() => getUserId())
  }, [])

  return <UserContext.Provider value={{ userId }}>{children}</UserContext.Provider>
}
