import { useEffect, useState } from "react"


function useFetchProducts() {
    const [products, setProducts] = useState([])
    useEffect(()=>{    fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(json=>setProducts(json))
                .catch((e)=>console.log(e))
    },[])
  return (
    products
  )
}

export default useFetchProducts
