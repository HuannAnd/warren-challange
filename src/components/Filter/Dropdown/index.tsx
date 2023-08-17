import { Container, Menu, Item } from './Styles';

import { StatusOption } from '@/constants/statusOptions';

import useSelected from "./useSelected";


type DropdownProps = {
  placeHolder: string
  options: StatusOption[]

}

const Dropdown = ({ placeHolder, options }: DropdownProps) => {
  const {
    getDisplay,
    showMenu,
    isSelected,
    onItemClick,
    handleDropdownClick
  } = useSelected(placeHolder);

  return (
    <Container onClick={handleDropdownClick}>
      <div className='Dropdown__content'>
        <p className='Dropdown__content__value-on'>{getDisplay()}</p>
        {showMenu && (
          <Menu>
            {options.map((option) =>
              <Item
                onClick={() => onItemClick(option)}
                key={option.label}
                isSelected={isSelected(option)}
              >{option.label}</Item>
            )}
          </Menu>
        )}
      </div>
      <svg className='Dropdown__icon' width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M3.75024 0.322815L0.926025 2.5015L12.8204 11.6772L24.7149 2.5015L21.8906 0.322815L12.8204 7.31982L3.75024 0.322815Z" fill="#DDDDDD" />
      </svg>
    </Container>
  );
}

export default Dropdown;