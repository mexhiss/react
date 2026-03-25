import { Link } from "react-router-dom";

import products from "../../../route/src/pages/info";

export default function Products() {


  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}