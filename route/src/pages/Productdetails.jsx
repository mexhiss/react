import { useParams } from "react-router-dom"
import products from "./info"


export default function Productdetails() {
  const { id } = useParams()  
  const product = products.find(p => p.id === Number(id))  
 

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: ${product.price.toFixed(2)}</p>
    </div>
  )
}