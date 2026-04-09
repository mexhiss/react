import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";




export default function DashboardPart({ username }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState(
    searchParams.get("search") || ""
  );
  const [onlyAvailable, setOnlyAvailable] = useState(
    searchParams.get("available") === "true"
  );
  const [sortBy, setSortBy] = useState(searchParams.get("sort") || "asc");

  const category = searchParams.get("category") || "all";

  const products = [
    { id: 1, name: "iPhone 15", category: "phones", price: 1200, available: true },
    { id: 2, name: "Samsung S24", category: "phones", price: 1000, available: false },
    { id: 3, name: "MacBook Pro", category: "laptops", price: 2400, available: true },
    { id: 4, name: "Dell XPS", category: "laptops", price: 1800, available: true },
    { id: 5, name: "iPad Air", category: "tablets", price: 850, available: false },
    { id: 6, name: "Galaxy Tab", category: "tablets", price: 780, available: true },
    { id: 7, name: "Sony Headphones", category: "accessories", price: 300, available: true },
    { id: 8, name: "Logitech Mouse", category: "accessories", price: 80, available: false },
    { id: 9, name: "Asus Zenbook", category: "laptops", price: 1500, available: true },
    { id: 10, name: "Nothing Phone", category: "phones", price: 700, available: true },
  ];

  useEffect(() => {
    const params = {};

    if (category !== "all") params.category = category;
    if (searchText.trim() !== "") params.search = searchText;
    if (onlyAvailable) params.available = "true";
    if (sortBy !== "asc") params.sort = sortBy;

    setSearchParams(params);
  }, [searchText, onlyAvailable, sortBy, category, setSearchParams]);

  let filteredProducts = products.filter((product) => {
    const matchesCategory =
      category === "all" ? true : product.category === category;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesAvailable = onlyAvailable ? product.available : true;

    return matchesCategory && matchesSearch && matchesAvailable;
  });

  filteredProducts.sort((a, b) => {
    if (sortBy === "asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  function parametrat(a){
    const params = Object.fromEntries(searchParams.entries());
              params.category = a;
              setSearchParams(params);
  }
  function fshiKategori(){
 const params = Object.fromEntries(searchParams.entries());
              delete params.category;
              setSearchParams(params);
  }

  function kerko(e){
setSearchText(e.target.value)
  }

  function showAviable(e){
     setOnlyAvailable(e.target.checked)
  }

  function sort(e){
setSortBy(e.target.value)
  }

  function reset(){
    setSearchText("");
              setOnlyAvailable(false);
              setSortBy("asc");
              setSearchParams({});
  }

  function profilii(){
    navigate("/profile")
  }
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Hello {username}, manage your products here.</p>

      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <h3>Filters</h3>

        <div style={{ marginBottom: "10px" }}>
          <button
            onClick={fshiKategori}
            style={{ marginRight: "8px" }}
          >
            All
          </button>

          <button
            onClick={()=>parametrat('phones')}
            style={{ marginRight: "8px" }}
          >
            Phones
          </button>

          <button
            onClick={()=>parametrat('laptops')}
            style={{ marginRight: "8px" }}
          >
            Laptops
          </button>

          <button
            onClick={()=>parametrat('tablets')}
            style={{ marginRight: "8px" }}
          >
            Tablets
          </button>

          <button
            onClick={()=>parametrat('accessories')}
          >
            Accessories
          </button>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchText}
            onChange={kerko}
            style={{ padding: "10px", width: "100%", boxSizing: "border-box" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>
            <input
              type="checkbox"
              checked={onlyAvailable}
              onChange={showAviable}
            />{" "}
            Show only available
          </label>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <select
            value={sortBy}
            onChange={sort}
            style={{ padding: "10px" }}
          >
            <option value="asc">Price low to high</option>
            <option value="desc">Price high to low</option>
          </select>
        </div>

        <div>
          <button
            onClick={reset}
            style={{ marginRight: "10px" }}
          >
            Reset
          </button>

          <button onClick={profilii}>Go To Profile</button>
        </div>
      </div>

      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <h3>Current Filters</h3>
        <p>
          <strong>Category:</strong> {category}
        </p>
        <p>
          <strong>Search:</strong> {searchText || "none"}
        </p>
        <p>
          <strong>Only Available:</strong> {onlyAvailable ? "Yes" : "No"}
        </p>
        <p>
          <strong>Sort:</strong> {sortBy}
        </p>
        <p>
          <strong>Total Results:</strong> {filteredProducts.length}
        </p>
      </div>

      {filteredProducts.length === 0 ? (
        <div
          style={{
            border: "1px solid red",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>No products found</h3>
          <p>Try another search or filter.</p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "15px",
          }}
        >
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ddd",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              <h3>{item.name}</h3>
              <p>
                <strong>Category:</strong> {item.category}
              </p>
              <p>
                <strong>Price:</strong> ${item.price}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                {item.available ? "Available" : "Not available"}
              </p>

              {item.available ? (
                <button>Add to cart</button>
              ) : (
                <button disabled>Unavailable</button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}