import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { MainLayout } from "./components/Layout/MainLayout"

import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import FetchIndv from "./UI/FetchIndv"
import { fetchPosts } from "./API/api"
import { useState } from "react"
import Posts from "./components/Posts"

const App = ()=>{
 
        const [isMounted, setIsMounted] = useState(false);

  return(
    <>
    <button onClick={()=>setIsMounted((prev)=>!prev)}>Toggle </button>
    {isMounted && <Posts/>}
    </>
  )
 
  
}
export default App