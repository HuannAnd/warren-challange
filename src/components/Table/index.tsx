import * as TableS from './Styles';

import TableDataRow from './components/TableDataRow';

import { useFilter } from '@/hooks/useFilter';
import { useTransactions } from '@/hooks/useTransactions';

import { organazingByDate } from '@/utils/organizingByDate'
import TransactionType from '@/utils/TransactionType';
// import handleTransactions from '@/utils/handleTransactions';

const Table = () => {
  const transactions = useTransactions();

  const { handleAllFilters } = useFilter();

  const heads = [
    "Title",
    "Description",
    "Status",
    "Amount"
  ]

  function handleTransactions(transactions: TransactionType[]) {
    if (transactions && transactions.length === 0) return


    const display = organazingByDate(transactions).filter(handleAllFilters).map(transaction => <TableDataRow transaction={transaction} key={transaction.id} />)
    return display

  }

  return (
    <TableS.Table>
      <TableS.THead>
        <TableS.TRow>
          {heads.map((head, index) => <TableS.Th key={index}>{head}</TableS.Th>)}
        </TableS.TRow>
      </TableS.THead>
      <TableS.TBody>{handleTransactions(transactions)}</TableS.TBody>
    </TableS.Table>
  );
}

export default Table;
