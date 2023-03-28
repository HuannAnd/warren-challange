import { useContext, useMemo, useState } from 'react';

import * as StylesSidebarFilters from './Styles'

import TransactionType from '@utils/TransactionType';

interface SidebarFiltersProps {
  copyInputChange: TransactionType
  setCopyInputChange: React.Dispatch<React.SetStateAction<TransactionType>>
}

const SidebarFilters: React.FC<SidebarFiltersProps> = ({ copyInputChange, setCopyInputChange }) => {
  const { openSidebarFilters, setOpenSidebarFilters, setInputChange, setAmountFunction, amountValue, setAmountValue } = useContext(GlobalPropsContext)
  const [amountOption, setAmountOption] = useState<string | null>(null);

  useMemo(() => {
    if (amountOption === 'equal') {
      setAmountFunction!((x: TransactionType) => x.amount! === amountValue!)
    }
    if (amountOption === 'less') {
      setAmountFunction!((x: TransactionType) => x.amount! < amountValue!)
    }
    if (amountOption === 'greater') {
      setAmountFunction!((x: TransactionType) => x.amount! > amountValue!)
    }

    setAmountFunction!(true)

  }, [amountOption, amountValue])

  function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
    let value = e.currentTarget.value
    value = value.replace(/\D/g, "")
    value = value.replace(/(\d{2})(\d*)/g, "R$ $2,$1")
    e.currentTarget.value = value
  }

  if (!openSidebarFilters) return null

  return (
    <StylesSidebarFilters.Sidebar className={`${openSidebarFilters ? 'activated' : 'disabled'}`}>
      <StylesSidebarFilters.Title >
        <StylesSidebarFilters.Text >Filters</StylesSidebarFilters.Text>
        <StylesSidebarFilters.Close onClick={() => {
          setOpenSidebarFilters!(false); console.log(openSidebarFilters);
        }} />
      </StylesSidebarFilters.Title>
      <StylesSidebarFilters.Menu>
        <StylesSidebarFilters.StatusFilter >
          <StylesSidebarFilters.Label>status</StylesSidebarFilters.Label>
          <StylesSidebarFilters.StatusOption
            className={`${copyInputChange?.status === 'created' && 'isSelected'}`}
            onClick={() => setCopyInputChange({ ...copyInputChange, status: 'created' })}
          >created</StylesSidebarFilters.StatusOption>
          <StylesSidebarFilters.StatusOption
            className={`${copyInputChange?.status === 'processing' && 'isSelected'}`}
            onClick={() => setCopyInputChange({ ...copyInputChange, status: 'processing' })}
          >processing</StylesSidebarFilters.StatusOption>
          <StylesSidebarFilters.StatusOption
            className={`${copyInputChange?.status === 'processed' && 'isSelected'}`}
            onClick={() => setCopyInputChange({ ...copyInputChange, status: 'processed' })}
          >processed</StylesSidebarFilters.StatusOption>
        </StylesSidebarFilters.StatusFilter>
        <StylesSidebarFilters.Button onClick={() => {
          setInputChange!(copyInputChange)
          setOpenSidebarFilters!(false)
        }}>apply</StylesSidebarFilters.Button>
      </StylesSidebarFilters.Menu>
    </StylesSidebarFilters.Sidebar>
  );
}

export default SidebarFilters;