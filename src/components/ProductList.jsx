import { useQuery } from '@tanstack/react-query';

import { ClipLoader } from "react-spinners";
import { useAddProduct, useProducts } from '../hooks/UseProducts';


const ProductList = () => {
    
   const {data, isFetching, isLoading, error, isSuccess} = useProducts();
   const addProduct = useAddProduct();
   const handleAdd = async()=>{
    try{
       addProduct.mutate({
        title: "Pink bottle",
        price: 30,
      });
    }
    catch(err){
      console.log(error)
    }
   }
    if (isLoading){
      return <ClipLoader></ClipLoader>
    }
    if (error){
      return <div>Error: {error.message}</div>
    }
    
   
    
  return (
    <div>
      <button onClick={handleAdd} disabled={addProduct.isPending}> {addProduct.isPending ? "Adding…" : "Add product"}</button>

     <div>
      Product List 
      {isSuccess&& data?.map(item=><p key={item.title}>{item.title}</p>)}
      {isFetching && <div>fetching...</div>}
       
     </div>
      

    </div>
  )
}

export default ProductList
