import { options } from "@/constants/statusOptions";
import { useFilter } from "@/components/Filter/useFilterHandles";
import { ReactNode } from "react";

import * as SideBar from './styles'

type StatusOptionProps = {
  value: string,
  children: ReactNode,
}

const StatusOption = ({ value, children }: StatusOptionProps) => {
  // const [{ preview }, { choose }] = useFilter();

  return (
    <SideBar.StatusOption
    // className={`${preview.status === value}`}
    // onClick={() => choose({ ...preview, status: value })}
    >
      {children}
    </SideBar.StatusOption>
  )
}

export default StatusOption;