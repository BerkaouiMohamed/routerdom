import React, { createContext } from "react";
import useFetchProducts from "./custemHooks/useFetchProducts";

export const productsStore = createContext();
function ContextProducts({ children }) {
  const prods = useFetchProducts();
  return (
    <productsStore.Provider value={prods}>{children}</productsStore.Provider>
  );
}

export default ContextProducts;
