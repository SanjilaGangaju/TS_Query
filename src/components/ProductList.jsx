import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'

const ProductList = () => {
    
    const api = 'https://fakestoreapi.com'

    async function fetchProducts(){
      const res = await fetch(`${api}/products`)
      const  data = await res.json()
      return data

    }
    
    const {data} = useQuery({queryKey:['products'],
      queryFn: fetchProducts,
    })
    
  return (
    <div>
      Product List 
      {data?.map(item=><p key={item.title}>{item.title}</p>)}
    </div>
  )
}

export default ProductList
