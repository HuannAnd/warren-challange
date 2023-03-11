import { useEffect, useState } from "react"
import { TransactionType } from "../../Types/TransactionTypes"
import * as StylesDropdown from './Styles'

export interface Option {
    label: string
    value: string
}

interface DropdownProps {
    placeHolder: string
    options: Option[]
    copyInputChange: TransactionType
    setCopyInputChange:Function
}

const Dropdown: React.FC<DropdownProps> = ({ placeHolder, options , copyInputChange , setCopyInputChange}) => {
    const [showMenu, setShowMenu] = useState<Boolean>(false);
    const [selectedValue, setSelectedValue] = useState<Option | null>(options[0]);


    useEffect(() => {
        const handler = () => setShowMenu(false)

        window.addEventListener('click', handler)

        return () => {
            window.removeEventListener('click', handler)
        }
    })

    const isSelected = (option: Option) => {
        return option.value === selectedValue?.value
    }
    
    const onItemClick = (option: Option) => {
        setCopyInputChange({...copyInputChange , status: option.value})
        setSelectedValue(option)
        if (selectedValue) return false

        return selectedValue!.label === option.label

    }

    const getDisplay = (): string => {
        if (selectedValue) return selectedValue.label

        return placeHolder

    }

    const handleInputClick = (e: React.MouseEvent<Element, MouseEvent>) => {
        e.stopPropagation()
        console.log('i spent here')
        setShowMenu(!showMenu)

    }

    return (
        <>
            <StylesDropdown.Container onClick={(e) => handleInputClick(e)}>
                <StylesDropdown.Input >
                    <StylesDropdown.ValueOn>{getDisplay()}</StylesDropdown.ValueOn>
                    {showMenu && (
                        <StylesDropdown.Menu>
                            {
                                options.map((option) =>
                                <StylesDropdown.Item
                                onClick={() => onItemClick(option)}
                                key={option.label}
                                isSelected={isSelected(option)}
                                >
                                        {option.label}
                                    </StylesDropdown.Item>
                                )
                            }

                        </StylesDropdown.Menu>
                    )}

                </StylesDropdown.Input>
                <StylesDropdown.Icon />
            </StylesDropdown.Container>
        </>
    );
}

export default Dropdown;