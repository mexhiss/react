import { useState, useEffect } from "react";

export function useWindowWidth(delay) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = setInterval(()=>{setWidth(window.innerWidth)},delay) 

   

    return () => clearInterval(handleResize);
  }, [delay]);

  return width;
}
