import { createContext, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import './App.css'
import Modal from './components/Modal/Modal'
import FilterTransaction from './components/Filter'
import Loading from './components/Loading'
import styled from 'styled-components'
import Nav from './components/Nav'
import Home from './components/Home'

import { TransactionType } from './Types/TransactionTypes'

export const LoadingContext = createContext(true)

function App() {
  const selectRef = useRef<HTMLSelectElement | undefined>(undefined);
  const [descriptionFilter, setDescriptionFilter] = useState<string | undefined>(undefined);
  const [selectFilter, setSelectFilter] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true)

  
  return ( 
      <Loading loading={loading} >
        <Nav />
        <Home />
      </Loading>
  
  )

}

export default App
