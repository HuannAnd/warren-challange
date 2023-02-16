import React, { useState } from 'react'
import * as StyledTable from './Styles'
import TableDataRow from '../TableDataRow'
import { TransactionType } from '../../Types/TransactionTypes'

// function name() {
//     Table({
//         filter: (transaction: TransactionType) => transaction.id === '132'
//              && transaction.title === '13xpto'
//              && transaction.description === '132'
//     })
// }

// equivalente à props.transactions ?? []
// function name(transactions: TransactionType[] | null): TransactionType[] {
//     if (!transactions) return []
    
//     return transactions
// }

// equivalente à props.transactions ??= []
// function name2(transactions: TransactionType[] | null) {
//     if (!transactions) {
//         transactions = []
//     }
// }

type TableProps = {
    transactions: TransactionType[]
    onClickRow: Func<TransactionType, void>
    filter?: Func<TransactionType, boolean>
}

const Table = ({ transactions, onClickRow, filter }: TableProps) => {
    const [internalTransactions, setinternalTransactions] = useState<TransactionType[]>(transactions ?? []);
    
    const filterTransactions = (): TransactionType[] => {
        console.log('Table', internalTransactions, filter)
        if (!filter) return internalTransactions
        
        const filteredTransactions = internalTransactions.filter(filter)
        return filteredTransactions
    }

    return (
        <StyledTable.Table>
            <StyledTable.THead>
                <StyledTable.TRow>
                    <StyledTable.Th>Title</StyledTable.Th>
                    <StyledTable.Th>Description</StyledTable.Th>
                    <StyledTable.Th>Status</StyledTable.Th>
                    <StyledTable.Th>Amount</StyledTable.Th>
                </StyledTable.TRow>
            </StyledTable.THead>
            <StyledTable.TBody>
            {
                filterTransactions().map(transaction => {
                    return(
                        <TableDataRow
                            onClickRow={onClickRow}
                            key={transaction.id}
                            transaction={transaction}
                        />
                    )
                })
            }
            </StyledTable.TBody>
        </StyledTable.Table>
    );
}

export default Table;