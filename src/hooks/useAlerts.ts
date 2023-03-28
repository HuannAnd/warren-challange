import { useState } from "react";

import { buttonStyles , containerStyles } from '@/constants/filterStyles'
import { FlattenSimpleInterpolation } from "styled-components";


type AlertStateType = {
  container: FlattenSimpleInterpolation,
  button: FlattenSimpleInterpolation

}

export function useAlert() {
  const [alertState, setAlertState] = useState< AlertStateType >({
    container: containerStyles.default,
    button: buttonStyles.default

  });


  
  

  return {alertState, setAlertState}
}