import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import useFetchSingleProduct from '../custemHooks/useFetchSingleProduct'

function SingelProduct() {
    const param=useParams()
    const product=useFetchSingleProduct(param.id)
    const navigate=useNavigate()
    const location=useLocation()

    function nav(){
        navigate(-1)
    }
  return (
    <div>
 <h1>{product?.title}</h1> 
<button onClick={nav}>back</button>

    </div>
  )
}

export default SingelProduct
