export default function profile ({username,isLoggedIn}){


  return(
     <div
                  style={{
                    border: "1px solid #ccc",
                    padding: "20px",
                    borderRadius: "10px",
                  }}
                >
                  <h2>Profile Page</h2>
                  <p>
                    <strong>Username:</strong> {username}
                  </p>
                  <p>
                    <strong>Status:</strong>{" "}
                    {isLoggedIn ? "Logged In" : "Logged Out"}
                  </p>
                  <p>This page should only be visible when user is logged in.</p>
                </div>
              
  )
}