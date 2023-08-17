import React, { createContext, useCallback, useState } from 'react';

export const StatusContext = createContext<string | null>(null)
export const SetStatusContext = createContext<(newStatus: "processed" | "processing" | "created" | null) => void>(() => { })


export default function StatusProvider({ children }: { children: React.ReactNode }) {
  const [status, set] = useState<"processed" | "processing" | "created" | null>(null);

  const setStatus = useCallback((newStatus: "processed" | "processing" | "created" | null) => set(newStatus), [])

  return (
    <StatusContext.Provider value={status}>
      <SetStatusContext.Provider value={setStatus}>
        {children}
      </SetStatusContext.Provider>
    </StatusContext.Provider>
  );
}