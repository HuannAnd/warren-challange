import StatusProvider from "./StatusProvider";
import TitleProvider from "./TitleProvider";

interface FilterContextProviderProps {
  children: React.ReactNode
}

export default function FilterContextProvider({ children }: FilterContextProviderProps) {
  return (
    <StatusProvider>
      <TitleProvider>
        {children}
      </TitleProvider>
    </StatusProvider>
  )
}