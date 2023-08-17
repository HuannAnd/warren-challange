import React, { createContext, useCallback, useState } from 'react';

export const TitleContext = createContext<string | null>(null)
export const SetTitleContext = createContext<(newStatus: string) => void>(() => { })


export default function TitleProvider({ children }: { children: React.ReactNode }) {
  const [title, set] = useState('');

  const setTitle = useCallback((newStatus: string) => set(newStatus), [])

  return (
    <TitleContext.Provider value={title}>
      <SetTitleContext.Provider value={setTitle}>
        {children}
      </SetTitleContext.Provider>
    </TitleContext.Provider>
  );
}