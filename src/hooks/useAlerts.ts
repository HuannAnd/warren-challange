import { useContext } from "react";

import { ErrorContext } from "@/contexts/ErrorContextProvider";


export function useAlert() {
  return useContext(ErrorContext);
}