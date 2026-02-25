import { useContext } from "react";
import ColorContext from "./UserContext.jsx/context";

export default function Button2(){

  const {setColor} = useContext(ColorContext)


  return(
    <button onClick={()=>{
setColor('yellow')
    }}
    
    style={{marginLeft : '10px'}}
    >yellow</button>
  )
}