import { useContext } from "react";
import ColorContext from "./UserContext.jsx/context";

export default function Komponent(){

const {color} = useContext(ColorContext)

return(

  <div  style={{
    background : color,
   padding : '40px 40px'
  }}  >
    Rezultat

  </div>
)

}