import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import Notes from './Notes'
import ProtectedRoute from './Protectedroute'

export default function App() {
  const [user, setUser] = useState(localStorage.getItem('user') || '')
  const [login, setLogin] = useState(localStorage.getItem('login') === 'true')
  useEffect(() => {
    localStorage.setItem('user', user)
    localStorage.setItem('login', login)
  }, [user, login])

  return (
    <Routes>
      <Route path='/' element={<Login setUser={setUser} setLogin={setLogin} />} />

      <Route
        path='/notes'
        element={
          <ProtectedRoute login={login} user={user}>
            <Notes setLogin={setLogin} setUser={setUser} />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}
