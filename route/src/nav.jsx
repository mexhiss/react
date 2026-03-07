
import { Link } from 'react-router-dom';
export default function Nav(){


  return(
    <>
    <Link to = '/'>
    <button>Home</button></Link>
    <Link to='/about'
    ><button>About</button></Link>


     <Link to='/products' >
     <button>Products</button>
     </Link>


     
    </>
  )
}