export default function List(props){

const lista = props.item
const category = props.category
 //const cheap=fruit.filter(fruits=>fruits.price<50) 

 //const item = cheap.map(fruits=><li key={fruits.id}>
   //                    name: {fruits.name} : {fruits.price}$</li>)
const listItems = lista.map(fruits=><li key={fruits.id}>
                      name: {fruits.name} : {fruits.price}$</li>)
  return(
    <>
<h3>{category}</h3>
<ul>{listItems}</ul>
</>
  )
}