import { useMemo, useState } from 'react'

import { Loading } from '@/components'

import Home from '@/pages/Home'

import { useTransactions } from '@/hooks/useTransactions'


function App() {
  const { transactions } = useTransactions();
  
  const [loading, setLoading] = useState(true);
  const [popupIsOpen, setPopupIsOpen] = useState<boolean>(false);

  function delayToClose() {
    setTimeout(() => {
      // setLoading(state => !state)
      console.log(loading)
    }, 8000)
  }

  delayToClose();

  return (
    false ? (
      <Loading loading={loading} />
    ) : (
      <Home />
    )
  );

}

export default App
