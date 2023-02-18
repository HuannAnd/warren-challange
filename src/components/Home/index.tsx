import axios from 'axios'
import Modal from '../Modal/Modal';
import Table from '../Table';
import { StyledMain } from './Styles'
import FilterTransaction from '../Filter';
import { useEffect, useState } from 'react'
import { TransactionType } from '../../Types/TransactionTypes'
import Filter from '../Filter';

interface HomeProps {
  transactions: TransactionType[] | undefined
}

export const Home: React.FC< HomeProps > = ({ transactions }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [selectedTransaction, setSelectedTransaction] = useState<TransactionType | undefined>(undefined)
  const [tableFilter, setTableFilter] = useState<Func<TransactionType, boolean> | undefined>(undefined)
  const [descriptionFilter, setDescriptionFilter] = useState<Func<TransactionType, boolean>>()
  const [statusFilter, setStatusFilter] = useState<Func<TransactionType, boolean>>()

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
      <Filter onInputChange={buildInputFilter} onStatusSelect={buildStatusFilter}/>
      <Table transactions={transactions!} onClickRow={openModal} filter={tableFilter} />
      <Modal
        setOpen={setOpen}
        transaction={selectedTransaction!}
        isOpen={isOpen}
      />
    </StyledMain>
  );
}

export default Home;