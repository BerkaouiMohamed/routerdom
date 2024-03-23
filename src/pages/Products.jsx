import React, { useContext } from 'react'
import useFetchProducts from '../custemHooks/useFetchProducts'
import Cart from '../components/Cart'
import {motion } from 'framer-motion'
import { productsStore } from '../ContextProducts'

const homeStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap:'40px'
}
function Products() {
const products=useContext( productsStore)
  return (
    <motion.div  style={homeStyle}>
    {products.map((product)=>{
     return <Cart >{product}</Cart>
    })}
   
 </motion.div>
  )
}

export default Products
