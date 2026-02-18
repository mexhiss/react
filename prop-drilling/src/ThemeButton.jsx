import { useContext } from "react";
import ThemeContext from "./UserContext.jsx/context";

export default function ThemeButton() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{ marginBottom: "20px", padding: "10px 20px" }}>
      Toggle Theme
    </button>
  );
}
