import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import TransactionsContextProvider from '@/contexts/TransactionsContextProvider'

import { GlobalStyles } from './Global'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TransactionsContextProvider>
      <GlobalStyles />
      <App />
    </TransactionsContextProvider>
  </React.StrictMode>,
)
