import { useMemo, useState } from "react";

import TransactionType from "@/utils/TransactionType";


export function useModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedModals, setSelectedModals] = useState([] as TransactionType[]);

  function handleModalRows(row: TransactionType): void {
    let newValue: TransactionType[];

    if (selectedModals?.findIndex(t => t.id === row.id) >= 0) {
      newValue = removeModalRow(row);
    } else {
      newValue = addModalRow(row);
    }

    setSelectedModals(newValue)

  }

  function addModalRow(row: TransactionType): TransactionType[] {
    const newValue = selectedModals?.concat([row])

    return newValue!

  }

  function removeModalRow(row: TransactionType) {
    const newValue = selectedModals?.filter(selected => selected.id !== row.id)

    return newValue!
  }

  type StatesType = {
    isOpen: typeof isOpen,
    selectedModals: typeof selectedModals
  }

  const states = {
    isOpen: isOpen,
    selectedModals: selectedModals
  }

  type HandlersType = {
    add: typeof addModalRow,
    remove: typeof removeModalRow,
    handler: typeof handleModalRows

  }

  const handlers = {
    add: addModalRow,
    remove: removeModalRow,
    handler: handleModalRows
  }

  // const result: [StatesType, HandlersType] = [states, handlers]

  // return result
  return {
    isOpen,
    handleModalRows,
    selectedModals
    
  }

}