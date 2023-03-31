import React, {
  createContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import * as TableS from './Styles';

import TransactionType from 'src/utils/TransactionType';

import TableDataRow from './components/TableDataRow';

import { useFilter } from '@/hooks/useFilter';
import { useModal } from '@/hooks/useModal';

import { organazingByDate } from '@/utils/organizingByDate'
import { useTransactions } from '@/hooks/useTransactions';

const Table = () => {
  const { transactions } = useTransactions();
  const [, { checker }] = useFilter();

  function handleTransactions() {
    if (transactions?.every(x => !x)) {
      return [];
    }

    return transactions?.map(transaction => <TableDataRow transaction={transaction} key={transaction.id} />)

  }

  return (

    <TableS.Table>

      <TableS.THead>
        <TableS.TRow>
          <TableS.Th>Title</TableS.Th>
          <TableS.Th>Description</TableS.Th>
          <TableS.Th>Status</TableS.Th>
          <TableS.Th>Amount</TableS.Th>
        </TableS.TRow>
      </TableS.THead>

      <TableS.TBody>{handleTransactions()}</TableS.TBody>

    </TableS.Table>
  );
}

export default Table;
