import { useContext } from 'react'

import { TransactionsContext } from '@/contexts/TransactionsContextProvider'

export default function useTransactions() {
  return useContext(TransactionsContext);
}