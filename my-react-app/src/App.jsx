
import List from "./list";

function App() {
 
  const fruit =[{id: 1,name :'apple' , price : 40},
  {id:2,name :'orange' , price : 60},
  {id:3,name :'banana' , price : 30}];

  const vegetables =[{id: 4,name :'carrot' , price : 40},
  {id:5,name :'eggplant' , price : 60},
  {id:6,name :'cucumber' , price : 30}];
   
  return(
<>
{fruit.length>0 ? <List item={fruit}  category='fruits'/ > : null}

{vegetables.length>0 ? <List item={vegetables}  category='vegetables'/ > : null}
 
 </>
   
  )
}

export default App;
