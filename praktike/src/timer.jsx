import { useEffect, useState } from "react";

export default function useTimer(delay){

  const [count,setCount]= useState(0)
  useEffect(()=>{

    const hi = setInterval(()=>{
      setCount(s=>s+1)
    },delay)

    return()=> clearInterval(hi)
     
    
  },[delay])
  
  return count
}