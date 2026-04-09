import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
    localStorage.setItem("username", username);
  }, [isLoggedIn, username]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/dashboard" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/login"
          element={
            <div style={{ padding: "20px", fontFamily: "Arial" }}>
              <h1>My React App</h1>
              <div
                style={{
                  border: "1px solid #ccc",
                  padding: "20px",
                  borderRadius: "10px",
                  maxWidth: "450px",
                }}
              >
                <h2>Login</h2>
                <LoginPart
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                  username={username}
                  setUsername={setUsername}
                />
              </div>
            </div>
          }
        />

        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <div style={{ padding: "20px", fontFamily: "Arial" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    border: "1px solid #ccc",
                    padding: "15px",
                    borderRadius: "10px",
                    marginBottom: "20px",
                  }}
                >
                  <div>
                    <Link to="/dashboard" style={{ marginRight: "10px" }}>
                      Dashboard
                    </Link>
                    <Link to="/profile" style={{ marginRight: "10px" }}>
                      Profile
                    </Link>
                    <Link to="/about">About</Link>
                  </div>

                  <div>
                    <span style={{ marginRight: "10px" }}>
                      Welcome, {username || "Guest"}
                    </span>
                    <button
                      onClick={() => {
                        setIsLoggedIn(false);
                        setUsername("");
                        localStorage.removeItem("isLoggedIn");
                        localStorage.removeItem("username");
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </div>

                <DashboardPart username={username} />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/profile"
          element={
            isLoggedIn ? (
              <div style={{ padding: "20px", fontFamily: "Arial" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    border: "1px solid #ccc",
                    padding: "15px",
                    borderRadius: "10px",
                    marginBottom: "20px",
                  }}
                >
                  <div>
                    <Link to="/dashboard" style={{ marginRight: "10px" }}>
                      Dashboard
                    </Link>
                    <Link to="/profile" style={{ marginRight: "10px" }}>
                      Profile
                    </Link>
                    <Link to="/about">About</Link>
                  </div>

                  <div>
                    <span style={{ marginRight: "10px" }}>
                      Welcome, {username || "Guest"}
                    </span>
                    <button
                      onClick={() => {
                        setIsLoggedIn(false);
                        setUsername("");
                        localStorage.removeItem("isLoggedIn");
                        localStorage.removeItem("username");
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </div>

                <div
                  style={{
                    border: "1px solid #ccc",
                    padding: "20px",
                    borderRadius: "10px",
                  }}
                >
                  <h2>Profile Page</h2>
                  <p>
                    <strong>Username:</strong> {username}
                  </p>
                  <p>
                    <strong>Status:</strong>{" "}
                    {isLoggedIn ? "Logged In" : "Logged Out"}
                  </p>
                  <p>This page should only be visible when user is logged in.</p>
                </div>
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/about"
          element={
            <div style={{ padding: "20px", fontFamily: "Arial" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  border: "1px solid #ccc",
                  padding: "15px",
                  borderRadius: "10px",
                  marginBottom: "20px",
                }}
              >
                <div>
                  <Link to="/dashboard" style={{ marginRight: "10px" }}>
                    Dashboard
                  </Link>
                  <Link to="/profile" style={{ marginRight: "10px" }}>
                    Profile
                  </Link>
                  <Link to="/about">About</Link>
                </div>

                <div>
                  {isLoggedIn ? (
                    <>
                      <span style={{ marginRight: "10px" }}>
                        Welcome, {username || "Guest"}
                      </span>
                      <button
                        onClick={() => {
                          setIsLoggedIn(false);
                          setUsername("");
                          localStorage.removeItem("isLoggedIn");
                          localStorage.removeItem("username");
                        }}
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <Link to="/login">Go to Login</Link>
                  )}
                </div>
              </div>

            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

function LoginPart({ isLoggedIn, setIsLoggedIn, username, setUsername }) {
  const [value, setValue] = useState(username || "");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div>
      <p>Please login first.</p>

      <input
        type="text"
        placeholder="Write your username"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          if (error) setError("");
        }}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "10px",
          boxSizing: "border-box",
        }}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button
        onClick={() => {
          if (value.trim() === "") {
            setError("Username is required");
            return;
          }

          setUsername(value);
          setIsLoggedIn(true);
          navigate("/dashboard");
        }}
        style={{ marginRight: "10px" }}
      >
        Login
      </button>

      <button
        onClick={() => {
          setValue("");
          setError("");
        }}
      >
        Clear
      </button>
    </div>
  );
}

function DashboardPart({ username }) {
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
            onClick={() => {
              const params = Object.fromEntries(searchParams.entries());
              delete params.category;
              setSearchParams(params);
            }}
            style={{ marginRight: "8px" }}
          >
            All
          </button>

          <button
            onClick={() => {
              const params = Object.fromEntries(searchParams.entries());
              params.category = "phones";
              setSearchParams(params);
            }}
            style={{ marginRight: "8px" }}
          >
            Phones
          </button>

          <button
            onClick={() => {
              const params = Object.fromEntries(searchParams.entries());
              params.category = "laptops";
              setSearchParams(params);
            }}
            style={{ marginRight: "8px" }}
          >
            Laptops
          </button>

          <button
            onClick={() => {
              const params = Object.fromEntries(searchParams.entries());
              params.category = "tablets";
              setSearchParams(params);
            }}
            style={{ marginRight: "8px" }}
          >
            Tablets
          </button>

          <button
            onClick={() => {
              const params = Object.fromEntries(searchParams.entries());
              params.category = "accessories";
              setSearchParams(params);
            }}
          >
            Accessories
          </button>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ padding: "10px", width: "100%", boxSizing: "border-box" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>
            <input
              type="checkbox"
              checked={onlyAvailable}
              onChange={(e) => setOnlyAvailable(e.target.checked)}
            />{" "}
            Show only available
          </label>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{ padding: "10px" }}
          >
            <option value="asc">Price low to high</option>
            <option value="desc">Price high to low</option>
          </select>
        </div>

        <div>
          <button
            onClick={() => {
              setSearchText("");
              setOnlyAvailable(false);
              setSortBy("asc");
              setSearchParams({});
            }}
            style={{ marginRight: "10px" }}
          >
            Reset
          </button>

          <button onClick={() => navigate("/profile")}>Go To Profile</button>
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

