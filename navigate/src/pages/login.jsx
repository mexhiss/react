import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();

  return (
    <>
      <input type="text" placeholder="enter ur name" />

      <button onClick={()=>nav('/dashboard')}>Login</button>
    </>
  );
}
