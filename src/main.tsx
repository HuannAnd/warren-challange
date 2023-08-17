import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import TransactionsContextProvider from '@/contexts/TransactionsContextProvider'
import ErrorContextProvider from '@/contexts/ErrorContextProvider'
import FilterContextProvider from '@/contexts/FilterContextProvider'

import { GlobalStyles } from './Global'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TransactionsContextProvider>
      <FilterContextProvider>
        <ErrorContextProvider>
          <GlobalStyles />
          <App />
        </ErrorContextProvider>
      </FilterContextProvider>
    </TransactionsContextProvider>
  </React.StrictMode>,
)
