import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



export default function LoginPart({ isLoggedIn, setIsLoggedIn, username, setUsername }) {
  const [value, setValue] = useState(username || "");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);

  function handleChange(e){
    setValue(e.target.value)
    if(error) setError('');
  }

  function login(){
 if (value.trim() === "") {
            setError("Username is required");
            return;}
            setUsername(value);
          setIsLoggedIn(true);
          navigate("/dashboard");
  }

  function clear(){
     setValue("");
          setError("");
  }
  return (
    <div>
      <p>Please login first.</p>

      <input
        type="text"
        placeholder="Write your username"
        value={value}
        onChange={handleChange}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "10px",
          boxSizing: "border-box",
        }}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button
        onClick={login}

          
        
        style={{ marginRight: "10px" }}
      >
        Login
      </button>

      <button
        onClick={clear}
      >
        Clear
      </button>
    </div>
  );
}