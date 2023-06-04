import {
  createContext,
  useState,
  useEffect
} from "react";

import TransactionType from 'src/utils/TransactionType';

import { getDocs } from "@firebase/firestore";
import { literalCollectionDatabase } from "@/services/firebase";
import { DocumentData } from "firebase/firestore";

type TransactionsContextProviderProps = {
  children: React.ReactNode
}

export const TransactionsContext = createContext([] as TransactionType[]);

export default function TransactionsContextProvider({ children }: TransactionsContextProviderProps) {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);

  useEffect(() => {
    const getTransaction = async () => {
      const data = await getDocs(literalCollectionDatabase);
      const mappingData = data.docs.map((doc: DocumentData) => ({ ...doc.data(), id: doc.id }));

      setTransactions(mappingData);
    }

    getTransaction();

  },
    []
  );

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );
}