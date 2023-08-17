import { useContext } from "react";

import { TitleContext } from '@/contexts/FilterContextProvider/TitleProvider'

export default function useTitle() {
  return useContext(TitleContext)
}