import { useNavigate } from "react-router-dom"

export default function Dashboard(){


  const nav = useNavigate()
  return(

    <>
    
    <p>Mireseerdhet ne dashboard</p>
    <button onClick={()=>nav(-1)}>GO back</button>


    </>
  )
}