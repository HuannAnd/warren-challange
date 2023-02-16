import axios from 'axios'
import Modal from '../Modal/Modal';
import Table from '../Table';
import { StyledMain } from './Styles'
import FilterTransaction from '../Filter';
import { useEffect, useState } from 'react'
import { TransactionType } from '../../Types/TransactionTypes'

export const Home = () => {
  const [transactions, setTransactions] = useState<TransactionType[] | undefined>();
  const [selectedTransaction, setSelectedTransaction] = useState<TransactionType | undefined>(undefined)
  const [isOpen, setOpen] = useState<boolean>(false);
  const [tableFilter, setTableFilter] = useState<Func<TransactionType, boolean> | undefined>(undefined)
  const [descriptionFilter, setDescriptionFilter] = useState<Func<TransactionType, boolean>>()
  const [statusFilter, setStatusFilter] = useState<Func<TransactionType, boolean>>()

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/HuannAND/database-json/db')
        .then(response => {
            setTransactions(response.data.transactions)
        })
        .catch(err => console.log(err))
  }, [])

  const openModal = (transaction: TransactionType) => {
    if (transactions) {
      setSelectedTransaction(transaction)
      setOpen(true)
    }
  }

  function buildStatusFilter(status: string): void {
    console.log('Home', status)
    if (!status) return

    setStatusFilter((transaction: TransactionType) => transaction.status === status)
    builderFilter()
  }

  function buildInputFilter(description: string): void {
    if (!description) return 
    
    setDescriptionFilter((transaction: TransactionType) => transaction.description === description)
    builderFilter()
  }

  function builderFilter() {
    if (descriptionFilter) {
        setTableFilter(descriptionFilter)
    }
    if (statusFilter) {
        setTableFilter(() => tableFilter && statusFilter)
    }
  }

  return (
    <StyledMain>
      <FilterTransaction onInputChange={buildInputFilter} onStatusSelect={buildStatusFilter}/>
      {transactions && <Table transactions={transactions!} onClickRow={openModal} filter={tableFilter} />}
      <Modal
        setOpen={setOpen}
        transaction={selectedTransaction!}
        isOpen={isOpen}
      />
    </StyledMain>
  );
}

export default Home;