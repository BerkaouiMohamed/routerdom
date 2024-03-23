import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {motion } from 'framer-motion'

function Login({setUser,user}) {
    const location=useLocation()
    const oldpath=location?.state?.from||"/"
console.log(location,"login");

const navigate=useNavigate()
  return (
    <motion.div initial={{scale:0}} animate={{scale:1}} exit={{scale:0}}>
      <button onClick={()=>{setUser(!user)
    
    navigate(oldpath,{replace:true})
    }}>user</button>
    </motion.div>
  )
}

export default Login
