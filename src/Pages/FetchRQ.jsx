import React, { useEffect } from 'react'
import { fetchPosts } from '../API/api'
import { useQuery } from '@tanstack/react-query';
import { NavLink } from 'react-router-dom';

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
    const { data, isPending, isError, error }=useQuery({
        queryKey:['posts'],//usestate
        queryFn: getPostsData,//useeffect
        staleTime: 10000,
        refetchInterval: 1000,
        refetchIntervalInBackground: true,
    })
    if (isPending) return <p>Loading...</p>
    if (isError) return <p>Error: {error.message || "Something went wrong!"} Something went wrong</p>
  return (
    <div>
      {data?.map(post=>{
       return (<li key={post.id}>
        <NavLink to={`/rq/${post.id}`}>
        <p>Title: {post.title}</p>
        </NavLink></li>)
      })}
    </div>
  )
}

export default FetchRQ
