
import { createContext, useState } from "react";


export const ErrorContext = createContext<boolean>(false);
export default function ErrorContextProvider({ children }: { children: React.ReactNode }) {
  const [isAlert, setIsAlert] = useState(false);

  return (
    <ErrorContext.Provider value={isAlert}>
      {children}
    </ErrorContext.Provider>
  )
}