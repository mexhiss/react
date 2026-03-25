import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ background : 'lightblue', gap : '5px', display : 'flex'}}>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}