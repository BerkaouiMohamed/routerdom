import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import useFetchSingleProduct from '../custemHooks/useFetchSingleProduct'

function SingelProduct() {
    const param=useParams()
    const product=useFetchSingleProduct(param.id)
    const navigate=useNavigate()
    const location=useLocation()

    function nav(){
        navigate("/sqdqsd")
    }
  return (
    <div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
 <h1>{product?.title}</h1> 
<button onClick={nav}>back</button>

    </div>
  )
}

export default SingelProduct
