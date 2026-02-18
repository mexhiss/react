import { useContext } from "react";
import ThemeContext from "./UserContext.jsx/context";


export default function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <header
      style={{
        backgroundColor: theme  ? "#eee" : "#333",
        color: theme ? "#000" : "#fff",
        padding: "10px",
        
      }}
    >
      Header
    </header>
  );
}

