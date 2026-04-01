import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const [username, setUsername] = useState("");
 
  const nav = useNavigate();

  const handleLogin = () => {
    if(username=='') return
   
    const userData = { name: username };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));

    nav("/products");
  };
 return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      
    </div>
  );
}