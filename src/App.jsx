import React from "react";
import Navigator from "./components/Navigator";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { Routes, Route } from "react-router-dom";
import SingelProduct from "./pages/SingelProduct";

function App() {
  return (
    <div>
      <Navigator />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:id" element={<SingelProduct />}/>

        
      </Routes>
    </div>
  );
}

export default App;
