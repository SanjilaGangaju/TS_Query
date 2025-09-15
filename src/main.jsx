import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
 const queryClient= new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
       <App />
          <ReactQueryDevtools initialIsOpen={false} />
      </BrowserRouter>
       
    </QueryClientProvider>
  
  </StrictMode>,
)
