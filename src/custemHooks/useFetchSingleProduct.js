import React, { useEffect, useState } from 'react'

function useFetchSingleProduct(id) {
    const [product,setProduct]=useState()

     useEffect(()=>{
        fetch('https://fakestoreapi.com/products/'+id)
        .then(res=>res.json())
        .then(json=>setProduct(json))
        .catch((e)=>console.log(e))
     },[id])
  return (
   product
  )
}

export default useFetchSingleProduct
