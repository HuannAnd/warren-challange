import { useState } from 'react';

import TransactionType from 'src/utils/TransactionType';


type FilterType = {
  title: string,
  status: string,
  amount: {
    value: number,
    toFilter: () => boolean
  },
}

export function useFilter() {
  const [filter, setfilter] = useState<FilterType>({} as FilterType);
  const [arbitraryFilter, setArbitraryFilter] = useState<FilterType>({} as FilterType);


  function handleAllFilters(transaction: TransactionType) {
    if (filter!.title && !transaction.title?.includes(filter!.title)) {
      return false

    }
    if (filter!.status && transaction.status !== filter!.status) {
      return false

    }
    if (filter!.amount && transaction.amount) {
      return false

    }

    return true

  }

  return {
    handleAllFilters,
    filter,
    setfilter,
    setArbitraryFilter,
    arbitraryFilter,
  }


}