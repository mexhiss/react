
import Dashboard from "./pages/dashboard"
import Login from "./pages/login"
import Notfound from "./pages/notfound"
import Home from "./pages/home"

import { Routes, Route } from "react-router-dom"
function App() {
  

  return (
    <>
    
      <Routes>
        <Route  path='/' element ={<Home/>} />
        <Route path='/login' element={<Login/>} />
        
        
        <Route  path= '/dashboard' element ={ <Dashboard/>}/>
        <Route path='*'  element={<Notfound/>}/>
      </Routes>
    </>
  )
}

export default App
