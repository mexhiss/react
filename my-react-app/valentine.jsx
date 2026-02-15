import { useState } from "react"

export default function Valentine(){
const [size,setSize]=useState(10)
const [yes,setYes]=useState(false)

  return(

    <>
    <p>WIll YOU BE MY VALENTINE?</p>


   {!yes && (  <button onClick={()=>setYes(!yes)}
    style={{collor : 'green',
      background : 'green'
    }}> Yes</button>)}

  

    {yes ? (<p>Yay meet me at 5 o clock </p>) : ( <button onClick={()=>setSize(size+2)

    }

  
    style={{
      padding : size,
     background : 'red',
     color : 'white',
     fontSize : size
    }
      
    }>No</button>)}
   
    </>
  )
}