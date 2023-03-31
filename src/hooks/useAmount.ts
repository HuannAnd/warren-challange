import { useMemo, useState } from "react"

import TransactionType from "@/utils/TransactionType"


export function useAmount() {
  const [amount, setAmount] = useState<number>()
  const [state, setState] = useState<((x: TransactionType) => boolean) | boolean>()
  const [option, setOption] = useState<string>('')

  useMemo(() => {
    if (option === 'equal') {
      setState!((x: TransactionType) => x.amount! === amount)
    }
    if (option === 'less') {
      setState((x: TransactionType) => x.amount! < amount!)
    }
    if (option === 'greater') {
      setState((x: TransactionType) => x.amount! > amount!)
    }

    setState(true)

  }, [amount, option])

  function sideBarClick() {

  }

  const result:
    [
      number | undefined,
      (boolean | ((x: TransactionType) => boolean)),
      string
    ] = [amount, state!, option]

  return result;

}