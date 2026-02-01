import { useState } from 'react'

import './App.css'

function App() {


  const [name,setName]=useState('')
  const [password,setPassword]=useState('')
  const[email,setEmail]=useState("")
  function handleSubmit(e){
    e.preventDefault()

    if(!name || !password || !email){
      alert("Fill all the fields")
      return
    }if(!email.includes('@')){
      alert('you forgot @')
      return
    }alert(name+' '+ password+' '+email)
  }
  return(

<div>
  <form onSubmit={handleSubmit}>
    <input value={name} onChange={e=>setName(e.target.value)} />
    <input value={password}  onChange={e=>setPassword(e.target.value)
    }/>
    <input value={email} onChange={e=>setEmail(e.target.value)} />
    <button type='submit'>submit</button>

  </form>
</div>

  )
}

export default App
