import React, {
  createContext,
  useContext,
  useMemo,
  useState
} from 'react';

import * as StyledTable from './Styles';

import TransactionType from 'src/utils/TransactionType';

import { GlobalPropsContext } from '@components/Home';
import TableDataRow from './components/TableDataRow';

import { useTransactions } from '@hooks/useTransactions';


interface Modal {
  selectedModals: TransactionType[] | null
  setSelectedModals: React.Dispatch<React.SetStateAction<TransactionType[] | null>>
  handleModalRows: (row: TransactionType) => void
  
}

export const ModalContext = createContext<Partial<Modal>>({});

const Table = () => {
  const { inputChange , setPopupIsOpen } = useContext(GlobalPropsContext)

  const { transactions } = useTransactions();

  const [selectedModals, setSelectedModals] = useState<TransactionType[]>([]);

  useMemo(() => {
    if (window.innerWidth >= 500) {
      setSelectedModals([])
    }

  }, [window.innerWidth])

  function handleModalRows(row: TransactionType): void {
    let newValue: TransactionType[];

    if (selectedModals?.findIndex(t => t.id === row.id) >= 0) {
      newValue = removeModalRow(row);
    } else {
      newValue = addModalRow(row);
    }

    setSelectedModals(newValue)
    // console.log(selectedModals);

  }

  function addModalRow(row: TransactionType): TransactionType[] {
    const newValue = selectedModals?.concat([row])
    console.log(newValue);

    return newValue!

  }

  function removeModalRow(row: TransactionType) {
    const newValue = selectedModals?.filter(selected => selected.id !== row.id)

    return newValue!
  }

  function handleAllFilters(transaction: TransactionType) {
    if (inputChange!.description && !transaction.description?.includes(inputChange!.description)) {
      return false
    }
    if (inputChange!.status && transaction.status !== inputChange!.status) {
      return false
    }
    if (inputChange!.amount && transaction.amount) {
      return false
    }

    return true

  }

  function organazingByDate(): TransactionType[] {
    return transactions!.sort(((a, b) => - (new Date(a.date!).valueOf() - new Date(b.date!).valueOf())))
  }

  const transactionsMapped = organazingByDate().filter((transaction: TransactionType) => handleAllFilters(transaction) && (
    <TableDataRow
      transaction={transaction}
      key={transaction.id}
    />
  ))

  function handleTransactions() {
    if (transactionsMapped.every(x => !x)) {
      setPopupIsOpen!(true)

      return []
    }

    return organazingByDate().filter((transaction: TransactionType) => handleAllFilters(transaction) && (
      <TableDataRow
        transaction={transaction}
        key={transaction.id}
      />
    ))

  }

  console.log(organazingByDate())

  return (
    <ModalContext.Provider value={{ selectedModals, handleModalRows }}>
      <StyledTable.Table>
        <StyledTable.THead>
          <StyledTable.TRow>
            <StyledTable.Th>Title</StyledTable.Th>
            <StyledTable.Th>Description</StyledTable.Th>
            <StyledTable.Th>Status</StyledTable.Th>
            <StyledTable.Th>Amount</StyledTable.Th>
          </StyledTable.TRow>
        </StyledTable.THead>
        <StyledTable.TBody>
          {handleTransactions()}
        </StyledTable.TBody>
      </StyledTable.Table>

    </ModalContext.Provider>
  );
}

export default Table;
