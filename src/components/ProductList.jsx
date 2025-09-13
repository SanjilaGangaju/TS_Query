import React, { useEffect, useState } from 'react'

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const api = 'https://fakestoreapi.com'
    async function fetchProducts(){
        const res = await fetch(`${api}/products`)
        const data = await res.json()
        console.log(data)
        setProducts(data)
    }
   
    
    useEffect(()=>{
        
      fetchProducts()
    }, [])
    
  return (
    <div>
      Product List 
      {products.map(item=><p key={item.title}>{item.title}</p>)}
    </div>
  )
}

export default ProductList
