import { createContext, useEffect, useRef, useState } from 'react'
import axios from 'axios'
// import './App.css'
import Modal from './components/Modal/Modal'
import FilterTransaction from './components/Filter'
import Loading from './components/Loading'
import styled from 'styled-components'
import Nav from './components/Nav'
import Home from './components/Home'

import { GlobalStyles } from './Global'
import { TransactionType } from './Types/TransactionTypes'

export const LoadingContext = createContext(true)

function App() {
  const selectRef = useRef<HTMLSelectElement | undefined>(undefined);
  const [transactions, setTransactions] = useState<TransactionType[] | undefined>(undefined);
  const [descriptionFilter, setDescriptionFilter] = useState<string | undefined>(undefined);
  const [selectFilter, setSelectFilter] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true)
  const [start, setStart] = useState< boolean >(false);

  // 'https://my-json-server.typicode.com/HuannAND/database-json/db'

  useEffect(() => {
    setLoading(true)
    axios.get('https://my-json-server.typicode.com/HuannAND/database-json/db')
      .then(function(response){
        console.log(response)
      })
      .catch(function(error){
        console.log(error)
      })
      .finally(() =>
        {
          setStart(true)
          setTimeout(() => {
          console.log('i spent here')
          return setLoading(false)
        }, 4000)
        }

      )
  }, [])


  return ( 
    <>
      <GlobalStyles />
        {
          loading ? (
            <Loading loading={loading} start={start}/>
          ) : (
            <>
              <Nav />
              <Home transactions={transactions}/>
            </>
          )
        }
    </>
  
  )

}

export default App
