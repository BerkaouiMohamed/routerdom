import { useEffect, useState } from "react"


function useHomeProducts() {
    const [products, setProducts] = useState([])
    useEffect(()=>{ 
        
        fetch('https://fakestoreapi.com/products?limit=5')
                .then(res=>res.json())
                .then(json=>setProducts(json))
                .catch((e)=>console.log(e))
    },[])
  return (
    products
  )
}

export default useHomeProducts
