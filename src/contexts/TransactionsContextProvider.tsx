import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
  useEffect
} from "react";

import TransactionType from 'src/utils/TransactionType';

import { useLoading } from "@/hooks/useLoading";

import { getDocs } from "@firebase/firestore";
import { literalCollectionDatabase } from "@/services/firebase";
import { DocumentData } from "firebase/firestore";


type ValueProps = {
  transactions: TransactionType[] | undefined
}

type TransactionsContextProviderProps = {
  children: ReactNode
}

export const TransactionsContext = createContext({} as ValueProps);

export default function TransactionsContextProvider({ children }: TransactionsContextProviderProps) {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);
  const { delayToClose } = useLoading();

  useEffect(() => {
    const getTransaction = async () => {
      const data = await getDocs(literalCollectionDatabase);

      const mappingData = data.docs.map((doc: DocumentData) => ({ ...doc.data(), id: doc.id }));

      console.log(mappingData);


      setTransactions(mappingData);
    } // @utils

    getTransaction().finally(() => {
      delayToClose();
    });

  },
    []
  );



  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );
}