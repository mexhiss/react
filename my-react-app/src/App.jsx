import { useState } from "react";

function App() {
 
  const products = [
    { id: 1, name: "Laptop", price: 800 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Headphones", price: 120 },
  ];

 
  const [cartCount, setCartCount] = useState(0);

  return (
    <div>
      <h1>Products</h1>

      {/* Hapi 1: renderim me map */}
      {products.map((product) => (
        <div key={product.id}>
          <p>
            {product.name} - ${product.price}
          </p>

          <button onClick={() => setCartCount(cartCount + 1)
          }>
            Add to cart
          </button>
        </div>
      ))}

      <hr />

      <h2>Cart Count: {cartCount}</h2>

      
      {cartCount === 0 ? (
        <p>Produkti nuk ka stock</p>
      ) : (
        <p>Jemi gati për checkout</p>
      )}
    </div>
  );
}

export default App;
