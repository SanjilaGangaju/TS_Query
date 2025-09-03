import React from 'react'
import { fetchInvPost } from '../API/api'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
const FetchIndv = () => {
   
    const {id} =useParams();
    const {data, isPending, isError, error}= useQuery({
        queryKey:["post"],
        queryFn: ()=>fetchInvPost(id),
    })
    if (isPending) return <p>is loading</p>
    if (isError) return <p>{error.message}</p>

    return (
        
    <div>
    <p>{data.id}</p>
     <p>{data.title}</p>
     <p>{data.body}</p>
    </div>
  )
}

export default FetchIndv
