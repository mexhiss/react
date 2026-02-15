import { useWindowWidth } from "../width";

export default function Width(){

  const width = useWindowWidth(6000)


  return(
    <>
    <p>{width}</p></>
  )
}