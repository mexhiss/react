import { useNavigate, useSearchParams } from "react-router-dom";

export default function ProductsPage({ setUser }) {
  const nav = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const products = [
    { id: 1, name: "Molle", category: "fruta" },
    { id: 2, name: "Banane", category: "fruta" },
    { id: 3, name: "Domate", category: "perime" },
    { id: 4, name: "Kastravec", category: "perime" }
  ];

  const category = searchParams.get("category") || "all";

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  const setFilter = (value) => {
    if (value === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: value });
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    nav("/login");
  };

  return (
    <div>
      <h2>Products</h2>

      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("fruta")}>Fruta</button>
      <button onClick={() => setFilter("perime")}>Perime</button>

      <ul>
        {filteredProducts.map((p) => (
          <li key={p.id}>
            {p.name} - {p.category}
          </li>
        ))}
      </ul>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
