import { useContext } from "react";
import Button from "./button";
import Button2 from "./button2";
import Button3 from "./button3";
import ColorContext from "./UserContext.jsx/context";

export default function NAV(){

const {color} = useContext(ColorContext)

  return(
    <>
    <nav style={{
      background : color,
      padding : "10px 10px",
      width : "100%",
     position : 'fixed',
     top : 0,
    
    }}>
       <Button/>
    <Button2/>
    <Button3/>
    </nav>
   
    </>
  )
}