import { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup interval when component unmounts
    return () => clearInterval(interval);
  }, []); // run once on mount

  return (
    <div>
      <p>{time.toLocaleTimeString()}</p> {/* show HH:MM:SS */}
    </div>
  );
}
