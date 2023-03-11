import { TransactionType } from '../../Types/TransactionTypes'
import * as StylesInput from './Styles'
import { IconPreset } from '../Filter'
import { FilterStyles } from '../Filter'

interface InputProps {
    copyInputChange: TransactionType
    setInputChange: Function
    setCopyInputChange: Function
    filterStyles: FilterStyles
}

const Input: React.FC<InputProps> = ({ setInputChange, copyInputChange, setCopyInputChange, filterStyles }) => {


    return (
        <StylesInput.Container currentStyles={filterStyles}>
            <StylesInput.Input
                type="text"
                placeholder='Search by description of transaction'
                onChange={(event) => setCopyInputChange(
                    { ...copyInputChange, description: event.target.value }
                )}
            />
            <StylesInput.Button
                onClick={() => setInputChange(copyInputChange)}
                currentStyles={filterStyles}
            />
        </StylesInput.Container>

    );
}

export default Input;