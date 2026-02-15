import { useEffect } from "react"



export default function useMesazh(mesazh,delay){


  useEffect(()=>{

     const Interval = setInterval(()=>{
    console.log({mesazh})
  },delay)


  return ()=>clearInterval(Interval)
  })

 


  
}