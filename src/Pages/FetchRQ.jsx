import React, { useEffect } from 'react'
import { fetchPosts } from '../API/api'
import { useQuery } from '@tanstack/react-query';

const FetchRQ = () => {

 

    const getPostsData=async()=>{
        try{
            const res= await fetchPosts();
            return res.status ==200? res.data:[];
        }
        catch(error){
            console.log(error);
            return [];
        }
    }
    useEffect(()=>{
        getPostsData()
    }, [])
    const { data }=useQuery({
        queryKey:['posts'],//usestate
        queryFn: getPostsData,//useeffect
    })
  return (
    <div>
      {data?.map(post=>{
       return (<li key={post.id}>{post.title}</li>)
      })}
    </div>
  )
}

export default FetchRQ
