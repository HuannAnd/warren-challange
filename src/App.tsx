import { createContext, useEffect, useState } from 'react'
import Loading from './components/Loading'
import Nav from './components/Nav'
import Home from './components/Home'
import { GlobalStyles } from './Global'
import { TransactionType } from './Types/TransactionTypes'
import { DocumentData, getDoc, getDocs, getFirestore } from 'firebase/firestore'
import { literalCollectionDatabase } from './firebase-config'
import PopUp from './components/Popup'

export const LoadingContext = createContext(true)


function App() {
  const [transactions, setTransactions] = useState<TransactionType[] | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true)
  const [start, setStart] = useState<boolean>(true);
  const [popupIsOpen, setPopupIsOpen] = useState< boolean >(false);

  useEffect(() => {
    const getTransaction = async () => {
      const data = await getDocs(literalCollectionDatabase)
      
      const mappingData = data.docs.map((doc: DocumentData) => ({ ...doc.data() , id: doc.id }))
      
      setTransactions(mappingData)
    }
    window.onload = () => {
      setLoading(true)
    }    
    getTransaction()
    .finally(() => {
      setTimeout(() => {  
        setLoading(false)
        
      }, 3000)
    }

    )
    
  }, [])

  console.log(transactions)

  return (
    <>
      <GlobalStyles />
      {
        loading ? (
          <Loading loading={loading} start={start.toString()} />
        ) : (
          <>
            <PopUp setPopupIsOpen={setPopupIsOpen} popupIsOpen={popupIsOpen}/>
            <Nav />
            <Home setPopupIsOpen={setPopupIsOpen} transactions={transactions} />
          </>
        )
      }
    </>

  )

}

export default App
