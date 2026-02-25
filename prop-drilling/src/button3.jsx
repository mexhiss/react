import { useContext } from "react";
import ColorContext from "./UserContext.jsx/context";


export default function Button3(){

  const {color} = useContext(ColorContext)

  return(
    <button style={{
      background : color,
      border : '2px solid black',
     marginLeft : '10px'
    }}
    

    >Result</button>
  )
}