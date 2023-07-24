import { MutableRefObject, useEffect, useMemo, useState } from "react";

import TransactionType from "@/utils/TransactionType";


export function useModal(ref: MutableRefObject<HTMLDivElement>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedModals, setSelectedModals] = useState([] as TransactionType[]);

  useEffect(() => {
    function handleWindowClick(e: MouseEvent) {
      const {
        top,
        left,
        right,
        bottom
      } = ref.current.getBoundingClientRect();
      const { clientX, clientY } = e;

      if (
        !(clientX >= left &&
          clientX <= right &&
          clientY >= top &&
          clientY <= bottom)
      ) {
        setIsOpen(false);
      }
    }

    window.addEventListener("click", (e) => handleWindowClick(e))

    return () => {
      window.removeEventListener("click", (e) => handleWindowClick(e))
    }
  },
    []
  );

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

  return {
    isOpen,
    handleModalRows,
    selectedModals

  }

}