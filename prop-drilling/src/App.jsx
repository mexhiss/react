import { useState } from "react";
import ThemeContext from "./UserContext.jsx/context";
import Header from "./header";
import Card from "./Card";

import ThemeButton from "./ThemeButton";

import { useEffect } from "react";

export default function App() {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => setTheme(!theme);

  // update body background whenever theme changes
  useEffect(() => {
    document.body.style.backgroundColor = theme ? "#fff" : "#222";
    document.body.style.color = theme  ? "#000" : "#fff";
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ padding: "20px" }}>
        <ThemeButton />
        <Header />
        <Card />
        {/* Footer */}
      </div>
    </ThemeContext.Provider>
  );
}

