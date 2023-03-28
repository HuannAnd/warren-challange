import { useState } from "react";


export function useLoading() {
  const [loading, setLoading] = useState<boolean>(true)

  return {loading, setLoading};
}