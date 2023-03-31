import { ReactNode, useState } from 'react';

import * as SideBar from './Styles'

import StatusOption from './components/StatusOption/index';

import TransactionType from '@/utils/TransactionType';
import { useFilter } from '@/hooks/useFilter';


const SidebarFilters = () => {
  const [isOpen, setisOpen] = useState(false);

  const [{ preview }, { apply }] = useFilter()

  function applySideBarFilters() {
    apply(preview)
    setisOpen(false)

  }

  function closeSideBar() {
    setisOpen(false)
  }

  if (!isOpen) return null

  return (
    <SideBar.Sidebar className={`${isOpen ? 'activated' : 'disabled'}`}>
      <SideBar.Title >
        <SideBar.Text >Filters</SideBar.Text>
        <SideBar.Close onClick={closeSideBar} />
      </SideBar.Title>
      <SideBar.Menu>
        <SideBar.StatusFilter >
          <SideBar.Label>status</SideBar.Label>
          <StatusOption value='created'>created</StatusOption>
          <StatusOption value='processing'>processing</StatusOption>
          <StatusOption value='processed'>processed</StatusOption>
        </SideBar.StatusFilter>
        <SideBar.Button onClick={applySideBarFilters}>apply</SideBar.Button>
      </SideBar.Menu>
    </SideBar.Sidebar>
  );
}

export default SidebarFilters;