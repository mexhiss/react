import { useContext } from "react";
import ThemeContext from "./UserContext.jsx/context";

export default function Card() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme ? "#ddd" : "#444",
        color: theme  ? "#000" : "#fff",
        padding: "20px",
      
      }}
    >
      This is a card.
    </div>
  );
}
