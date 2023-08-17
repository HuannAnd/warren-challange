import { useContext } from "react";

import { StatusContext } from '@/contexts/FilterContextProvider/StatusProvider'

export default function useStatus() {
  return useContext(StatusContext)
}