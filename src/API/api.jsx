import React from 'react'
import axios from 'axios'
const api =
    axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com',
})
  
export const fetchPosts=async()=>{
    return await api.get("/posts")
}

export default api
