import { useContext } from "react";
import { GlobalPropsContext } from "../../../Home";
import * as StylesFilterMobile from './Styles'

const FilterMobile = () => {
  const { openSidebarFilters, setOpenSidebarFilters } = useContext(GlobalPropsContext)

  return (
    <StylesFilterMobile.Container onClick={() => {
      setOpenSidebarFilters!(isOpen => !isOpen); console.log(openSidebarFilters);
    }}>

    </StylesFilterMobile.Container>

  );
}

export default FilterMobile;