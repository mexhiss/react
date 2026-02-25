import { useEffect } from "react";

export default function useShow(mesazh,delay){

  useEffect(()=>{

   const hi= setInterval(()=>{
     console.log(mesazh)
    },delay)
    
    return(()=>clearInterval(hi))
  })
}