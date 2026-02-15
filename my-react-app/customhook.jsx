import { useEffect, useState } from "react";

export default function useFetchData(url){

  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(null)
  const [data,setData]=useState([])


  useEffect(()=>{
 
    async function fetchdata(){

      setLoading(true)
      try{

        const res = await fetch(url)
        const json = await res.json()
        setData(json)
      }catch(err){
        setError(err)
      }finally{
        setLoading(false)
      }

    }
fetchdata()
  },[url])

  return { data,error,loading}
}