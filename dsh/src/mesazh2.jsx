import useMesazh from "./mesazh";

export default function Mesazh2() {
  const mesazh = useMesazh("Mexhis", 1000);

  return (
    <>
      <p>{mesazh}</p>
    </>
  );
}
