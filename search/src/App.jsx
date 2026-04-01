import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import ProductsPage from "./ProductsPage";
import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  const [user, setUser] = useState(
       JSON.parse(localStorage.getItem("user")) || null
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />

        <Route
          path="/products"
          element={
            <ProtectedRoute user={user}>
              <ProductsPage setUser={setUser} />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}