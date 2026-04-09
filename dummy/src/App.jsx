import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import DashboardPart from "./Dashboard";
import LoginPart from "./Login";
import About from "./About";
import Profile from "./Profile";
import Layout from "./Layout";
import ProtectedRoute from "./ProtectedRoute";

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

      
        <Route path="/" element={<Navigate to="/dashboard" />} />

        <Route
          path="/login"
          element={
            <LoginPart
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              username={username}
              setUsername={setUsername}
            />
          }
        />

     
        <Route
          element={
            <Layout
              username={username}
              setIsLoggedIn={setIsLoggedIn}
              setUsername={setUsername}
              isLoggedIn={isLoggedIn}
            />
          }
        >

        
          <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
            <Route
              path="/dashboard"
              element={<DashboardPart username={username} />}
            />
            <Route
              path="/profile"
              element={
                <Profile username={username} isLoggedIn={isLoggedIn} />
              }
            />
          </Route>

         
          <Route path="/about" element={<About />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}