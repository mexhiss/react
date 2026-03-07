import  products from "./info"
import { Link } from "react-router-dom"

export default function Products (){
  return(
    <>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>

          <Link to={`/products/${product.id}`}>
            <button>Info</button>
          </Link>

        </div>
      ))}
    </>
  )
}