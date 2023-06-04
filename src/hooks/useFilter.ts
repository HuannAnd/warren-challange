import { Dispatch, SetStateAction, useState } from 'react';

import TransactionType from 'src/utils/TransactionType';

import { useAmount } from '@/hooks/useAmount';


type FilterType = {
  title: string,
  status: string,
  amount: {
    value: number,
    toFilter: () => boolean
  },
}

type StatesType = {
  preview: FilterType,
  filter: FilterType
}

type HandlersType = {
  apply: Dispatch<SetStateAction<FilterType>>,
  choose: Dispatch<SetStateAction<FilterType>>,
  checker: (transaction: TransactionType) => boolean,
}

export function useFilter() {
  const [filter, setfilter] = useState<FilterType>({} as FilterType);
  const [arbitraryFilter, setArbitraryFilter] = useState<FilterType>({} as FilterType); // ??

  // const { amount } = useAmount();

  function handleAllFilters(transaction: TransactionType) {
    if (filter.title && !transaction.title?.includes(filter!.title)) {
      return false

    }
    if (filter.status && transaction.status !== filter.status) {
      return false

    }

    return true

  }

  const states: StatesType = {
    preview: arbitraryFilter,
    filter: filter
  }

  const handlers: HandlersType = {
    apply: setfilter,
    choose: setArbitraryFilter,
    checker: handleAllFilters

  }

  const result: [StatesType, HandlersType] = [states, handlers]
  return result
  return {
    
  }

}