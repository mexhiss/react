// Login.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login({ setUser, setLogin }) {
  const [input, setInput] = useState('')
  const navigate = useNavigate()

  const loginUser = () => {
    if (!input) return alert('Shkruaj username')

    setUser(input)
    setLogin(true)
    navigate('/notes')
  }

  return (
    <>
      <input onChange={(e) => setInput(e.target.value)} />
      <button onClick={loginUser}>Login</button>
    </>
  )
}