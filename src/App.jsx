import React, { useState } from "react";
import Navigator from "./components/Navigator";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { Routes, Route } from "react-router-dom";
import SingelProduct from "./pages/SingelProduct";
import Login from "./pages/Login";
import ProdtectedRoutes from "./ProdtectedRoutes";

function App() {
  const [user, setUser] = useState(false);
  console.log("🚀 ~ App ~ user:", user);
  return (
    <div>
      <Navigator />
      <Routes>
          <Route path="/" element={<Home />} />
        <Route element={<ProdtectedRoutes user={user} />}>
          <Route path="/products" element={<Products />} />
        </Route>
        <Route path="/login" element={<Login {...{ user, setUser }} />} />

        <Route path="/products/:id" element={<SingelProduct />} />
      </Routes>
    </div>
  );
}

export default App;
