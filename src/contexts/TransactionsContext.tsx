import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
  useEffect
} from "react";

import TransactionType from 'src/utils/TransactionType';

import { useLoading } from "@hooks/useLoading";

import { getDocs } from "@firebase/firestore";
import { literalCollectionDatabase } from "@services/firebase";
import { DocumentData } from "firebase/firestore";

 
type ValueProps = {
  transactions: TransactionType[] | undefined
  setTransactions: Dispatch<SetStateAction<TransactionType[] | undefined>>
}

type TransactionsContextProviderProps = {
  children: ReactNode
}

export const TransactionsContext = createContext({} as ValueProps);

export default function TransactionsContextProvider({ children }: TransactionsContextProviderProps) {
  const [transactions, setTransactions] = useState<TransactionType[] | undefined>();

  const { setLoading } = useLoading();



  useEffect(() => {
    const getTransaction = async () => {
      const data = await getDocs(literalCollectionDatabase)

      const mappingData = data.docs.map((doc: DocumentData) => ({ ...doc.data(), id: doc.id }))

      setTransactions(mappingData)
    }

    getTransaction()
      .finally(() => {
        setTimeout(() => {
          setLoading(false)

        }, 3000)
      }
      )

  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}