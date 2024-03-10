import React, { useEffect, useState } from 'react'
import Cart from '../components/Cart'
import useHomeProducts from '../custemHooks/useHomeProducts'
const homeStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap:'40px'
}

function Home() {
const products=useHomeProducts()

  return (
    <div style={homeStyle}>
       {products.map((product)=>{
        return <Cart >{product}</Cart>
       })}
      
    </div>
  )
}

export default Home
