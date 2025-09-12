import React from 'react'
import axios from 'axios'
const api =
    axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com',
})
  
export const fetchPosts=async()=>{
    try{
        return await api.get("/posts")
    }
    catch(error){
        console.log(error)

    }
    
}

export const fetchInvPost = async(id)=>{
    try{
        const res= await api.get(`/posts/${id}`)
        return res.status==200? res.data:[]
    }
    catch(error){
        console.log(error);
    }
}
export const createPost = async(newPost)=>{
    try{
        const res= await api.post('/posts')
        return res;
    }
    catch(error){
        console.log(error)
    }

}

export default api

