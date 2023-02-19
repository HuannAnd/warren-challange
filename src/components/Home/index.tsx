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

export interface Inputchange {
  description: string 
  status: string 
}

export const Home: React.FC<HomeProps> = ({ transactions }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [selectedTransaction, setSelectedTransaction] = useState<TransactionType | undefined>(undefined)
  const [inputChange, setInputChange] = useState<TransactionType>({ description: '', status: '' })

  const openModal = (transaction: TransactionType) => {
    if (transactions) {
      setSelectedTransaction(transaction)
      setOpen(true)
    }
  }

  return (
    <StyledMain>
      <Filter inputChange={inputChange} setInputChange={setInputChange} />
      <Table inputChange={inputChange} transactions={transactions!} onClickRow={openModal} />
      <Modal
        setOpen={setOpen}
        transaction={selectedTransaction!}
        isOpen={isOpen}
      />
    </StyledMain>
  );
}

export default Home;