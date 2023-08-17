import { useContext } from "react";

import { SetTitleContext } from '@/contexts/FilterContextProvider/TitleProvider'

export default function useSetTitle() {
  return useContext(SetTitleContext)
}