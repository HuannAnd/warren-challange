import { useEffect, useState } from "react";

import { useFilter } from "./useFilter";

import Option from "@/utils/Option";
import { options } from '@/constants/statusOptions'

export default function useDropdownLogic(placeHolder: string) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<Option | null>(options[0]);

  const { setStatus } = useFilter();

  useEffect(() => {
    const handleWindowClick = () => setShowMenu(false);

    window.addEventListener('click', handleWindowClick)

    return () => {
      window.removeEventListener('click', handleWindowClick)
    }
  },
    []
  )


  function isSelected(option: Option): boolean {
    return option.value === selectedValue?.value
  }

  function onItemClick(option: Option): boolean {
    setStatus(option.value);
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
    setShowMenu(showMenu => !showMenu)
  }

  return {
    handleDropdownClick,
    isSelected,
    onItemClick,
    getDisplay,
    showMenu,
  }

}