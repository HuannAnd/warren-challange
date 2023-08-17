import { useMemo } from 'react';

import * as Table from './Styles';

import Row from './Row';

import { organazingByDate } from '@/utils/organizingByDate';

import useFilter from '@/components/Filter/useFilterHandles';
import useTransactions from '@/hooks/useTransactions';
import useTitle from '@/hooks/useTitle';
import useStatus from '@/hooks/useStatus';
import useTransactionFilterFunc from '@/hooks/useTransactionFilterFunc';

const heads = [
  "Title",
  "Description",
  "Status",
  "Amount"
]
export default function Index() {
  const transactions = useTransactions();

  const handleFilters = useTransactionFilterFunc();
  const title = useTitle()
  const status = useStatus()

  const transactionsResult = useMemo(() => {
    if (transactions && transactions.length === 0) return

    return organazingByDate(transactions).filter(handleFilters).map(transaction => <Row transaction={transaction} key={transaction.id} />)
  }, [title, status]);

  return (
    <Table.Root>
      <Table.Head>
        <Table.Row>
          {heads.map((head, index) => <Table.Th key={index}>{head}</Table.Th>)}
        </Table.Row>
      </Table.Head>
      <Table.Body>{transactionsResult}</Table.Body>
    </Table.Root>
  );
}
