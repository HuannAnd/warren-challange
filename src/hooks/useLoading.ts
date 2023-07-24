import { useState } from "react";


export function useLoading() {
  const [loading, setLoading] = useState<boolean>(true)

  function delayToClose(seconds: number) {
    setTimeout(() => {
      setLoading(state => !state)
    }, seconds * 1000)
  }

  return { loading, delayToClose };
}