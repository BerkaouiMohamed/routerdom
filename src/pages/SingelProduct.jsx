import React from 'react'
import { useParams } from 'react-router-dom'

function SingelProduct() {
    const param=useParams()
  return (
    <div>
      single product

      {param.id}
    </div>
  )
}

export default SingelProduct
