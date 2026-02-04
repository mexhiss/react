import { useState } from "react"

export default function Forma(){
 
  const[info,setInfo]=useState({
    name : '',
    password : '',
    email : ''
  })


  function submit(e){
    e.preventDefault
    if(!info.name || !info.password || !info.email){
      alert('ploteso fushat')
      return
    } if(!info.email.includes('@')){
      alert('Vendos @')
    } alert('mireseerdhe')
  }
  return(

    <form onSubmit={submit}>
      <input type="text" value={info.name} onChange={(e)=>setInfo({...info,name : e.target.value})} />

      <input type="password" value={info.password} onChange={(e)=>setInfo({...info, password : e.target.value})} />

      <input type="text" value={info.email} onChange={(e)=>setInfo({...info,email : e.target.value})} />



      <button type="submit">submit</button>
    </form>


  )
}