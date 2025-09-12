import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react'
import { createPost } from '../../API/api';

const CreatePost = () => {

    const [title, setTitle]= useState("")
        const {mutate} = useMutation({mutationFn: createPost})

    const handleSubmit=(e)=>{
        e.preventDefault();
        mutate({title, body:"This is a new post "})
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Post title.." onChange={(e)=>setTitle(e.target.value)}/>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default CreatePost
