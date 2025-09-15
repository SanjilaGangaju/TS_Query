import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useProductDetail } from '../hooks/UseProducts'

const ProductDetails = () => {
   const {data, isLoading, error} = useProductDetail(8);
   console.log(data)
   console.log(error)
  return (
    <div>
        <h1>Product Detail</h1>
        <p>{data?.title}</p>

      
    </div>
  )
}

export default ProductDetails
