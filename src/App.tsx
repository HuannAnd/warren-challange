import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import LoaderTransactions from './components/LoaderTransactions'
import Modal from './components/Modal/Modal'

export interface TransactionType {
  id: string | undefined,
  title: string | undefined,
  description: string | undefined,
  status: string | undefined,
  amount: number | undefined

}

function App() {
  const [transactions, setTransactions] = useState<TransactionType[] | null>(null)
  const [isOpen, setOpen] = useState<boolean>(false)
  const [currentTitle, setCurrentTitle] = useState<string>()
  const [transactionCatcher, setTransactionCatcher] = useState<TransactionType | undefined>(undefined)

  function handleModalActivate(id: string) {
    if (transactions !== null) {
      setTransactionCatcher(transactions.find(t => t.id === id))
      setOpen(true)


    }

  }

  console.log(window)

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/HuannAND/database-json/db')
      .then(res => {
        // console.log(res.data.transactions)
        setTransactions(res.data.transactions)
        // console.log(transactions)

      })
      .catch(err => console.log(err))

  }, [])

  return (
    <>
      <div className="container-seacher">
        <input type="text" className="search-trade" />
        <select className="status-filter">
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>amount</th>
          </tr>
        </thead>
        <tbody>
          <LoaderTransactions handleModalActivate={handleModalActivate} transactions={transactions} />
        </tbody>
      </table>
      <Modal
        setOpen={setOpen}
        amount={transactionCatcher?.amount}
        description={transactionCatcher?.description}
        id={transactionCatcher?.id}
        title={transactionCatcher?.title}
        status={transactionCatcher?.status}
        isOpen={isOpen}
      />

    </>

  )
}

export default App
