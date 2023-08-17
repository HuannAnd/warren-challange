import { useContext } from "react";

import { ErrorContext } from "@/contexts/ErrorContextProvider";

export default function useAlert() {
  return useContext(ErrorContext);
}