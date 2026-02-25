import { useContext } from "react";
import ColorContext from "./UserContext.jsx/context";


export default function Button(){

  const {setColor} = useContext(ColorContext)


  return(
    <button onClick={()=>{
      setColor('red')
    }}
    
    style={{marginLeft : '10px'}}
    >Red</button>
  )
}