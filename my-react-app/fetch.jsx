

import useFetchData from "./customhook";


export default function Fetchdata(){

  const {data,loading,error} = useFetchData('https://jsonplaceholder.typicode.com/posts?_limit=5'
)
console.log(data)


return(
  <>
  <p>{loading && 'loading'}</p>
  <p>{error && error.message}</p>
  {data.map((info)=>(
    <div key={info.id}>
    <p>{info.title}</p>
    </div>
))}
</>
)

}