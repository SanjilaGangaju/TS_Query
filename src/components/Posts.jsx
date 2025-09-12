import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { fetchPosts } from '../API/api'

const Posts = () => {
  const {data, isLoading, error} = useQuery({queryKey: ['posts'],
  queryFn: fetchPosts,
  staleTime: 5000,                              
 })
 if (isLoading) return <p>Loading....</p>
 if (error) return <p>Error occured: {error.message}</p> 
 console.log(data)
  return (
    <>
   {data.data?.map(post=>(<p>{post.title}</p>))}

    </>
  )
}

export default Posts
