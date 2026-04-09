
import { Link } from "react-router-dom";


export default function Nav({username,setIsLoggedIn,setUsername}){

  function logout(){
     setIsLoggedIn(false);
    setUsername("");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
  }

  
    return(
  <div style={{ padding: "20px", fontFamily: "Arial" }}>



                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    border: "1px solid #ccc",
                    padding: "15px",
                    borderRadius: "10px",
                    marginBottom: "20px",
                  }}
                >
                  <div>
                    <Link to="/dashboard" style={{ marginRight: "10px" }}>
                      Dashboard
                    </Link>
                    <Link to="/profile" style={{ marginRight: "10px" }}>
                      Profile
                    </Link>
                    <Link to="/about">About</Link>
                  </div>

                  <div>
                    <span style={{ marginRight: "10px" }}>
                      Welcome, {username || "Guest"}
                    </span>
                    <button
                      onClick={logout}
                    >
                      Logout
                    </button>
                  </div>
                </div>

               
              </div>
            );
            
          
          }
