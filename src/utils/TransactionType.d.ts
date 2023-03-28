export default interface TransactionType {
  id?: string | undefined,
  title?: string | undefined,
  description?: string | undefined,
  status?: string | undefined,
  amount?: number | undefined,
  date?: string,
  from?: string,
  to?: string
}
