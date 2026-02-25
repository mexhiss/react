
import { useState } from "react";
import Layout from "./layout";
import ColorContext from "./UserContext.jsx/context";

export default function App(){

 
const [color,setColor]=useState('')




return(
<>
  <ColorContext.Provider value={{color,setColor}}>
<Layout/>
  </ColorContext.Provider>
</>
)

}