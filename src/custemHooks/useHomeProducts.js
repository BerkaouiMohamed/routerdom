import { useEffect, useReducer, useState } from "react"


const productsReducer=(state,action)=>{

  switch(action.type){
    case "setProducts":
      return [...action.payload]
    default:
      return state
  }
  
}
const fetchprod=(element)=>{
return{
    type:"setProducts",
    payload:element
      
}

}
function useHomeProducts() {
    const [products, dispatch] = useReducer(productsReducer,[])
    useEffect(()=>{ 
        
        fetch('https://fakestoreapi.com/products?limit=5')
                .then(res=>res.json())
                .then(json=>dispatch(fetchprod(json)))
                .catch((e)=>console.log(e))
    },[])
  return (
    products
  )
}

export default useHomeProducts
