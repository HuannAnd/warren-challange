import { ChangeEvent, useState } from 'react';

import TransactionType from 'src/utils/TransactionType';

import useSiteContext from './useSiteContext';


export function useFilter() {
  const {
    title,
    status,
    setStatus,
    setTitle
  } = useSiteContext();

  const [_title, _setTitle] = useState("");

  function handleAllFilters(transaction: TransactionType) {
    if (title && !transaction.title?.includes(title)) {
      return false

    }
    if (status && transaction.status !== status) {
      return false

    }

    return true
  }

  function handleTitleChange(e: ChangeEvent<HTMLInputElement>) {
    const newTitle = e.currentTarget.value;

    _setTitle(newTitle);
  }

  function handleButtonTitleClick() {
    setTitle(_title);
  }

  return {
    title,
    status,
    handleAllFilters,
    handleTitleChange,
    handleButtonTitleClick,
    setStatus
  }

}