import { useEffect, useState } from "react";

import { options, StatusOption } from '@/constants/statusOptions'

import useSetStatus from "../../../hooks/useSetStatus";

export default function useDropdownLogic(placeHolder: string) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<StatusOption | null>(options[0]);

  const setStatus = useSetStatus()

  useEffect(() => {
    const handleWindowClick = () => setShowMenu(false);

    window.addEventListener('click', handleWindowClick)

    return () => {
      window.removeEventListener('click', handleWindowClick)
    }
  },
    []
  )


  function isSelected(option: StatusOption): boolean {
    return option.value === selectedValue?.value
  }

  function onItemClick(option: StatusOption): boolean {
    setStatus(option.value);
    setSelectedValue(option)
    if (!selectedValue) return false

    return selectedValue.label === option.label

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