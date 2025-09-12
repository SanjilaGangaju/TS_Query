import React from 'react'
import { fetchInvPost } from '../API/api'
import { useQuery } from '@tanstack/react-query'

const PostById = ({id}) => {
   const {data, isLoading, error} = useQuery({queryKey: ['posts', id],
  queryFn: ()=> fetchInvPost(id),
  staleTime: 5000,                              
 })
 if (isLoading) return <p>Loading....</p>
 if (error) return <p>Error occured: {error.message}</p> 
 console.log(data)
  return (
    <>
   <p>{data.title}</p>

    </>
  )
}

export default PostById
