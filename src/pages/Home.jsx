import React, { useEffect, useState } from 'react'
import Cart from '../components/Cart'
import useHomeProducts from '../custemHooks/useHomeProducts'
import {motion } from 'framer-motion'
const homeStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap:'40px'
}

function Home() {
const products=useHomeProducts()

  return (
    <motion.div  style={homeStyle} >
       {products.map((product)=>{
        return <Cart >{product}</Cart>
       })}
      
    </motion.div>
  )
}

export default Home
