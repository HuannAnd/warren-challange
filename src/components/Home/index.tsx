import Table from '../Table';
import { StyledMain } from './Styles'
import { createContext, SetStateAction, useState } from 'react'
import { TransactionType } from '../../Types/TransactionTypes'
import Filter from '../Filter';
import Input from '../Input';
import { FlattenSimpleInterpolation , css} from 'styled-components';

interface HomeProps {
  transactions: TransactionType[] | undefined
  setPopupIsOpen: Function

}
export interface Inputchange {
  description: string
  status: string
}

export interface ContextProps {
  inputChange: TransactionType
  setInputChange: React.Dispatch<React.SetStateAction<TransactionType>>
  setPopupIsOpen: Function
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  isOpen: boolean
  transactions: TransactionType[] | undefined
  onClickRow: (transaction: TransactionType) => void
  openSidebarFilters: boolean 
  setOpenSidebarFilters: React.Dispatch<React.SetStateAction< boolean >>
  currentFilterStyles: FilterStyles ,
  setCurrentFilterStyles: React.Dispatch<React.SetStateAction<FilterStyles>>
  amountFunction: ((transaction: TransactionType) => boolean) | boolean
  setAmountFunction: React.Dispatch<React.SetStateAction<((transaction: TransactionType) => boolean) | boolean>>
  amountValue:  number | null
  setAmountValue: React.Dispatch<SetStateAction<number | null>>
}

export interface FilterStyles {
  containerStyles: FlattenSimpleInterpolation
  iconStyles: FlattenSimpleInterpolation
}

export const GlobalPropsContext = createContext<Partial<ContextProps>>({});

export const Home: React.FC<HomeProps> = ({ transactions, setPopupIsOpen }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [inputChange, setInputChange] = useState<TransactionType>({ description: '', status: '' })
  const [currentFilterStyles, setCurrentFilterStyles] = useState< FilterStyles >(
    {
      containerStyles: css`
          border: none;   
          

      `,
      iconStyles: css`
          background-size: 25px;
          background-image: url(/src/assets/search-icon.svg);
          
      `
    }
  );
  
  const [openSidebarFilters, setOpenSidebarFilters] = useState< boolean >(true);
  const [amountFunction, setAmountFunction] = useState<((transaction: TransactionType) => boolean) | boolean>(true);
  const [amountValue, setAmountValue] = useState<number | null>(null);

  const openModal = () => {
    if (transactions) {
      setOpen(true)
    }
  }

  return (
    <StyledMain>
      <GlobalPropsContext.Provider
        value={
          {
            inputChange: inputChange,
            setInputChange: setInputChange,
            setPopupIsOpen: setPopupIsOpen,
            transactions: transactions,
            onClickRow: openModal,
            isOpen: isOpen,
            setOpen: setOpen,
            openSidebarFilters: openSidebarFilters,
            setOpenSidebarFilters: setOpenSidebarFilters,
            currentFilterStyles: currentFilterStyles,
            setCurrentFilterStyles: setCurrentFilterStyles,
            amountFunction: amountFunction,
            setAmountFunction: setAmountFunction,
            amountValue: amountValue,
            setAmountValue: setAmountValue
          }
        }
      >
        <Filter />
        <Table />
      </GlobalPropsContext.Provider>
    </StyledMain>
  );
}

export default Home;