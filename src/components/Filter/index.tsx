import React, { useContext, useEffect, useState } from 'react';

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
  const { alertState } = useAlert();

  return (
    <div className="container-seacher">
      <Input alertState={alertState} />
      <Dropdown options={options} placeHolder="status" />
    </div>
  );
}

export default Filter; 