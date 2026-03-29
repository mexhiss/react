import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Notes({ setLogin, setUser }) {
  const [note, setNote] = useState('')
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('notes')) || []
  )

  const navigate = useNavigate()

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])
 const addNote = () => {
    if (!note) return alert('Shkruaj note')

    setNotes([...notes, note])
    setNote('')
  }

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index))
  }

  const logout = () => {
    setLogin(false)
    setUser('')
    navigate('/')
  }

  return (
    <>
      <h3>Notes: {notes.length}</h3>   <input value={note} onChange={(e) => setNote(e.target.value)} />
      <button onClick={addNote}>Add</button>

      {notes.map((n, i) => (
        <p key={i}>
          {n} <button onClick={() => deleteNote(i)}>X</button>
        </p>
      ))}

      <button onClick={logout}>Logout</button>
    </>
  )
}
