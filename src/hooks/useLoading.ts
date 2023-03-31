import { useState } from "react";


export function useLoading() {
  const [loading, setLoading] = useState<boolean>(false)

  function delayToClose() {
    setTimeout(() => {
      setLoading(state => !state)
      console.log(loading)
    }, 3000)
  }

  return {loading, delayToClose};
}