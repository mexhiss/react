import {Routes,Route} from 'react-router-dom'
import ProtectedRoute from './Protectedroutes'
import Admin from './admin'
import Dashboard from './dashboard'
import { useNavigate } from 'react-router-dom'

import { useState } from 'react'

export default function App(){

  const[user,setUser]=useState(null)

 const navigate=useNavigate()
  return(
    <>
    
<Routes>
  <Route path='/' element={<></>}/>
    <Route path='/dashboard' element={<ProtectedRoute user={user}><Dashboard/></ProtectedRoute>}/>
<Route path='/admin'  element={<ProtectedRoute user={user} adminOnly={true}>
<Admin/>
</ProtectedRoute>} />

</Routes>
  
    <button onClick={()=>{
      setUser({name:'user',role:'user'})
      navigate('/dashboard')
  }}>Log as User</button>
    <button onClick={()=>{setUser({name : 'admin', role : 'admin'})
    navigate('/admin')}
  }>Log as Admin</button>

    <button onClick={()=>{
      setUser(null)
    }}>Logout</button>
</>
  )
}