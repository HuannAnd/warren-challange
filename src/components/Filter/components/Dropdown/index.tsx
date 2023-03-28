import { useEffect, useState } from "react";

import TransactionType from "@/utils/TransactionType";
import Option from '@/utils/Option';

import { useDropdown } from "@/hooks/useDropdown";

import * as StylesDropdown from './Styles';
import { useFilter } from "@/hooks/useFilter";


type DropdownProps = {
  placeHolder: string
  options: Option[]

}

const Dropdown = ({ placeHolder, options }: DropdownProps) => {
  const {
    isSelected,
    showMenu,
    setShowMenu,
    onItemClick,
    handleDropdownClick,
    getDisplay
  } = useDropdown(placeHolder);

  useEffect(() => {
    const handler = () => setShowMenu(false)

    window.addEventListener('click', handler)

    return () => {
      window.removeEventListener('click', handler)
    }
  })

  return (
    <StylesDropdown.Container onClick={handleDropdownClick}>
      <StylesDropdown.Input >

        <StylesDropdown.ValueOn>{getDisplay()}</StylesDropdown.ValueOn>

        {showMenu && (
          <StylesDropdown.Menu>
            {options.map((option) =>
              <StylesDropdown.Item
                onClick={() => onItemClick(option)}
                key={option.label}
                isSelected={isSelected(option)}
              >{option.label}</StylesDropdown.Item>
            )}
          </StylesDropdown.Menu>
        )}
      </StylesDropdown.Input>

      <StylesDropdown.Icon />

    </StylesDropdown.Container>
  );
}

export default Dropdown;