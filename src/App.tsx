import { useState } from 'react'

import { Loading, Header, Home, PopUp, Table } from '@/components/index'

import { GlobalStyles } from './Global'
 
import { useLoading } from '@/hooks/useLoading'
import { useTransactions } from '@/hooks/useTransactions'


function App() {
  const { transactions } = useTransactions();
  const { loading } = useLoading();
  const [popupIsOpen, setPopupIsOpen] = useState<boolean>(false);


  return (
    <>
      <GlobalStyles />
      {loading ? (
        <Loading loading={loading} />
      ) : <Home />
    </>

  )

}

export default App
