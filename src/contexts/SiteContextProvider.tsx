import TransactionType from '@/utils/TransactionType';
import React, { createContext, useState } from 'react';

type ContextProps = {
  title: string,
  status: string,
  setTitle: React.Dispatch<React.SetStateAction<string>>,
  setStatus: React.Dispatch<React.SetStateAction<string>>
}
export const SiteContext = createContext<ContextProps>({} as ContextProps);
export default function SiteContextProvider({ children }: { children: React.ReactNode }) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');


  return (
  <SiteContext.Provider value={{ title, setTitle, status, setStatus }}>
      {children}
    </SiteContext.Provider>
  );
};