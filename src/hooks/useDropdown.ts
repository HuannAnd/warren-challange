import { useEffect, useState } from "react";

import { useFilter } from "./useFilter";

import Option from "@/utils/Option";
import { options } from '@/constants/statusOptions'


export function useDropdown(placeHolder: string) {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const [selectedValue, setSelectedValue] = useState<Option | null>(options[0]);

  const { setArbitraryFilter, arbitraryFilter } = useFilter();

  const isSelected = (option: Option) => {
    return option.value === selectedValue?.value
  }

  const onItemClick = (option: Option) => {
    setArbitraryFilter({ ...arbitraryFilter, status: option.value })
    setSelectedValue(option)
    if (selectedValue) return false

    return selectedValue!.label === option.label

  }

  const getDisplay = (): string => {
    if (selectedValue) return selectedValue.label

    return placeHolder

  }

  const handleDropdownClick = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation()

    setShowMenu(!showMenu)

  }

  return {
    handleDropdownClick,
    getDisplay,
    showMenu,
    setShowMenu,
    onItemClick,
    isSelected
  }
}