import useStatus from "./useStatus"
import useTitle from "./useTitle"

import TransactionType from "@/utils/TransactionType";

export default function useTransactionFilterFunc() {
  const title = useTitle()
  const status = useStatus();

  function handleTransactions(transaction: TransactionType) {
    if (title && !transaction.title?.includes(title)) {
      return false

    }
    if (status && transaction.status !== status) {
      return false

    }

    return true
  }

  return handleTransactions
}