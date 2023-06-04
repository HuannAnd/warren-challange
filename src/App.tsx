import { useMemo, useState } from 'react'

import { Loading } from '@/components'

import Home from '@/pages/Home'

import { useTransactions } from '@/hooks/useTransactions'
import { useLoading } from './hooks/useLoading';


function App() {
  const { transactions } = useTransactions();
  const { loading } = useLoading();

  const [popupIsOpen, setPopupIsOpen] = useState<boolean>(false);

  function delayToClose() {
    setTimeout(() => {
      // setLoading(state => !state)
      console.log(loading)
    }, 8000)
  }

  delayToClose();

  return (
    loading ? (
      <Loading loading={loading} />
    ) : (
      <Home />
    )
  );

}

export default App
