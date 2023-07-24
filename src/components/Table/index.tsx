import { useMemo } from 'react';

import * as TableS from './Styles';

import TableDataRow from './components/TableDataRow';

import { organazingByDate } from '@/utils/organizingByDate';

import { useSiteContext } from '@/hooks';
import { useFilter } from '@/hooks/useFilter';
import { useTransactions } from '@/hooks/useTransactions';

export default function Table() {
  const transactions = useTransactions();
  let display: JSX.Element[] = [];

  const { handleAllFilters } = useFilter();
  const { title, status } = useSiteContext();

  const heads = [
    "Title",
    "Description",
    "Status",
    "Amount"
  ]

  useMemo(() => {
    if (transactions && transactions.length === 0) return

    display = organazingByDate(transactions).filter(handleAllFilters).map(transaction => <TableDataRow transaction={transaction} key={transaction.id} />)
  }, [title, status]);

  return (
    <TableS.Table>
      <TableS.THead>
        <TableS.TRow>
          {heads.map((head, index) => <TableS.Th key={index}>{head}</TableS.Th>)}
        </TableS.TRow>
      </TableS.THead>
      <TableS.TBody>{display}</TableS.TBody>
    </TableS.Table>
  );
}
