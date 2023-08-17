import { useEffect, useState } from "react";

import TransactionType from "@/utils/TransactionType";
import useIsMobile from "./useIsMobile";


export default function useModal() {
  const [selectedModals, setSelectedModals] = useState([] as TransactionType[]);
  console.log("selectedModals value: ", selectedModals)

  const isMobile = useIsMobile()
  console.log("isMobile inside useModal value: ", isMobile)

  useEffect(() => {
    console.log("useEffect inside useModal has fired")

    if (!isMobile) {
      setSelectedModals([])
    }

    return
  }, [isMobile])

  function handleModalRows(e: React.MouseEvent<Element, MouseEvent>, row: TransactionType): void {
    console.log("handleModalRows inside useModal has fired")
    console.log("Event value inside handleModalRows: ", e)
    e.stopPropagation()
    let newValue: TransactionType[];

    if (selectedModals?.findIndex(t => t?.id === row.id) >= 0) {
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
    const newValue = selectedModals?.filter(selected => selected?.id !== row.id)

    return newValue!
  }


  return {
    handleModalRows,
    selectedModals
  }

}