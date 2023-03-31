import { useEffect, useMemo, useState } from "react";

import { useFilter } from "./useFilter";

import Option from "@/utils/Option";
import { options } from '@/constants/statusOptions'


type HandlersType = {
  isSelected: (option: Option) => boolean,
  itemClick: (option: Option) => boolean,
  dropdownClick: (e: React.MouseEvent<Element, MouseEvent>) => void

}
type StatesType = {
  text: () => string,
  showMenu: boolean

}

export function useDropdownLogic(placeHolder: string) {
  const [state, setState] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<Option | null>(options[0]);

  const [{ preview }, { choose }] = useFilter();

  useEffect(() => {
    const handler = () => setState(false)

    window.addEventListener('click', handler)

    return () => {
      window.removeEventListener('click', handler)
    }
  })

  
  function isSelected(option: Option): boolean {
    return option.value === selectedValue?.value
  }
  
  function onItemClick (option: Option): boolean {
    choose({ ...preview, status: option.value })
    setSelectedValue(option)
    if (selectedValue) return false
    
    return selectedValue!.label === option.label
    
  }
  
  function getDisplay(): string {
    if (selectedValue) return selectedValue.label
    
    return placeHolder
    
  }
  
  function handleDropdownClick(e: React.MouseEvent<Element, MouseEvent>): void {
    e.stopPropagation()
    
    setState(!state)
    
  }
  
  const states: StatesType = {
    showMenu: state,
    text: getDisplay
  }

  const handlers = useMemo(
    () => ({
      isSelected: isSelected,
      itemClick: onItemClick,
      dropdownClick: handleDropdownClick,
    }),
    []
  )
  const result: [StatesType, HandlersType] = [states, handlers]

  return result

}