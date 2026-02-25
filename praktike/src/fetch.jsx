import { useEffect, useState } from "react";


export default function useFetch(url){

const [error,setError]=useState('')
const [loading,setLoading]=useState('')
const [data,setData] = useState([])


useEffect(()=>{

  async function FETCHDATA(){

    setLoading('loading...')

    try{

    const res = await fetch(url)
    
    const json = await res.json()
    setData(json)
    }catch(err){
      setError(err.message)
    }finally{
      setLoading('')
    }

  } FETCHDATA()



},[url])

return {data,error,loading}
}