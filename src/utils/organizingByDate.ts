import TransactionType from '@/utils/TransactionType'

export function organazingByDate(transactions: TransactionType[]): TransactionType[] {
  return transactions?.sort(((a, b) => - (new Date(a.date!).valueOf() - new Date(b.date!).valueOf())))
}