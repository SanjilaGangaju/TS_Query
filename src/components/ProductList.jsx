import { useQuery } from '@tanstack/react-query';

import { ClipLoader } from "react-spinners";


const ProductList = () => {
    
    const api = 'https://fakestoreapi.com'

    async function fetchProducts(){
      try{
          const res = await fetch(`${api}/products`)
    
      const  data = await res.json()
      return data
      }
      catch(error){
        console.log(error) 
      }
    
      

    }
    
    const {data, isLoading ,error, isSuccess, isFetching} = useQuery({queryKey:['products'],
      queryFn: fetchProducts,
    })
    if (isLoading){
      return <ClipLoader></ClipLoader>
    }
    if (error){
      return <div>Error: {error.message}</div>
    }
    if (isFetching){
      return <div>fetching</div>
    }
    
  return (
    <div>

      Product List 
      {isSuccess&& data?.map(item=><p key={item.title}>{item.title}</p>)
}
    </div>
  )
}

export default ProductList
