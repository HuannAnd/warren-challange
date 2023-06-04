import TableDataRow from "@/components/Table/components/TableDataRow"

import TransactionType from "./TransactionType"

import { organazingByDate } from "./organizingByDate"
import { useFilter } from "@/hooks"

export default function handleTransactions(transactions: TransactionType[]) {
  console.log("Passou aqui");
  
  if (transactions && transactions.length === 0) return

  const { handleAllFilters } = useFilter();

  const display = organazingByDate(transactions).filter(handleAllFilters).map(transaction => <TableDataRow transaction={transaction} key={transaction.id} />)
  return display

}