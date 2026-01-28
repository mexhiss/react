import { useState } from 'react'

import './App.css'

function App() {

  const[hasNotification,setHasNotification]=useState(false)
  function toggle(){
    setHasNotification(!hasNotification)
  }

const[status,setstatus] = useState(false)
function toggle2(){
  setstatus(!status)
}
  return (
   
    <div>
      <button onClick={toggle2}>Status : {status ? <span className='Active'>Aktiv</span> : <span className='Pasive'>Pasiv</span>}</button>
      <button onClick={toggle}>{hasNotification ? 'Hide Notification' : ' Show Notification'}</button>
      <p>{hasNotification && status ? <span className='tekst'>You have a new notification</span> : ''}</p>
    </div>
  )
}

export default App
