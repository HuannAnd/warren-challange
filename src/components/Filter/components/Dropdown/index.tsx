import Option from '@/utils/Option';

import { useDropdownLogic } from "@/hooks/useDropdownLogic";

import * as StylesDropdown from './Styles';


type DropdownProps = {
  placeHolder: string
  options: Option[]

}

const Dropdown = ({ placeHolder, options }: DropdownProps) => {
  const {
    
  } = useDropdownLogic(placeHolder);

  return (
    <StylesDropdown.Container onClick={dropdownClick}>
      <StylesDropdown.Input >
        <StylesDropdown.ValueOn>{text()}</StylesDropdown.ValueOn>
        {showMenu && (
          <StylesDropdown.Menu>
            {options.map(
              (option) =>
                <StylesDropdown.Item
                  onClick={() => itemClick(option)}
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