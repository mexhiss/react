import useTimer from "./timer";


export default function App(){

  const count = useTimer(1000)


  return(
    <p>TIMER : {count}</p>
  )
}