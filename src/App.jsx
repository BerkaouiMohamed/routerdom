import React, { createContext, useState } from "react";
import Navigator from "./components/Navigator";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { Routes, Route, useLocation } from "react-router-dom";
import SingelProduct from "./pages/SingelProduct";
import Login from "./pages/Login";
import ProdtectedRoutes from "./ProdtectedRoutes";
import ContextProducts from "./ContextProducts";



function App() {

  const [user, setUser] = useState(false);

  const location=useLocation()
  return (
    
    <div> 
     <ContextProducts>
      <Navigator />
      <Routes key={location.pathname} location={location}> 
          <Route path="/" element={<Home />} />
        <Route element={<ProdtectedRoutes user={user} />}>
          <Route path="/products" element={<Products />} />
        </Route>
        <Route path="/login" element={<Login {...{ user, setUser }} />} />

        <Route path="/products/:id" element={<SingelProduct />} />
        
      <Route path="*" element={<h1>404</h1>} />
      </Routes>
      </ContextProducts>
    </div>
  );
}

export default App;
