import { useContext } from "react";

import { SetStatusContext } from '@/contexts/FilterContextProvider/StatusProvider'

export default function useSetStatus() {
  return useContext(SetStatusContext)
}