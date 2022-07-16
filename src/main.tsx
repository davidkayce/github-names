import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider, QueryClient } from 'react-query';

import App from './App'
import './index.scss'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
    }
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
)
