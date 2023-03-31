import { useContext, useState } from "react";

import * as StylesFilterMobile from './Styles'

const FilterMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return <StylesFilterMobile.Container onClick={() => setIsOpen(isOpen => !isOpen)}></StylesFilterMobile.Container>

}

export default FilterMobile;