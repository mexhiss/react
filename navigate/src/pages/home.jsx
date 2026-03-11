import { Link } from "react-router-dom"



export default function Home(){

  return(

    <>
    <Link to = "/login"
    ><button>Login</button></Link>

    <Link to="/dashboard"><button>Dashboard</button></Link>
    
   
    </>
  )
}