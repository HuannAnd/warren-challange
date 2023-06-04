import { useContext } from 'react'

import { TransactionsContext } from '@/contexts/TransactionsContextProvider'

export function useTransactions() {
  return useContext(TransactionsContext);
}