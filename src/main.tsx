import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import TransactionsContextProvider from '@/contexts/TransactionsContextProvider'
import ErrorContextProvider from '@/contexts/ErrorContextProvider'
import SiteContextProvider from './contexts/SiteContextProvider'

import { GlobalStyles } from './Global'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TransactionsContextProvider>
      <SiteContextProvider>
        <ErrorContextProvider>
          <GlobalStyles />
          <App />
        </ErrorContextProvider>
      </SiteContextProvider>
    </TransactionsContextProvider>
  </React.StrictMode>,
)
