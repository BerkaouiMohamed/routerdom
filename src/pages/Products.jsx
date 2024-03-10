import React from 'react'
import useFetchProducts from '../custemHooks/useFetchProducts'
import Cart from '../components/Cart'
const homeStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap:'40px'
}
function Products() {
    const products=useFetchProducts()
  return (
    <div style={homeStyle}>
    {products.map((product)=>{
     return <Cart >{product}</Cart>
    })}
   
 </div>
  )
}

export default Products
