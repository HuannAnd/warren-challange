import { useLayoutEffect, useState } from "react";


export function useLoading() {
  const [loading, setLoading] = useState<boolean>(true)

  useLayoutEffect(() => setLoading(true), [])

  function delayToClose(seconds: number) {
    setTimeout(() => {
      setLoading(state => !state)
    }, seconds * 1000)
  }

  return { loading, delayToClose };
}