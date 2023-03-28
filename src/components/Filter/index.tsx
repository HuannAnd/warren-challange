import React, { useContext, useState } from 'react';

import { options } from '@/constants/statusOptions';

import './FilterTransaction.css';

import {
  Input,
  Dropdown,
  FilterMobile,
  SidebarFilters
} from './components/index';

import { useFilter } from '@/hooks/useFilter';
import { useAlert } from '@/hooks/useAlerts';


const Filter = () => {
  const { arbitraryFilter } = useFilter();
  const { alertState } = useAlert()

  

  return (
    <div className="container-seacher">
      <Input alertState={alertState} />
      <Dropdown options={options} placeHolder="status" />
      <FilterMobile />
      <SidebarFilters />
    </div>
  );
}

export default Filter; 