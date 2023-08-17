import { useEffect, useState } from "react"


export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleWindowResize = () => {
      setIsMobile(window.innerWidth <= 1023)
    }

    window.addEventListener("resize", handleWindowResize)

    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  },)

  return isMobile
}