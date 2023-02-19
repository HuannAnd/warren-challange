import React, { useState } from 'react'
import * as StyledTable from './Styles'
import TableDataRow from '../TableDataRow'
import { TransactionType } from '../../Types/TransactionTypes'
import { Inputchange } from '../Home'

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
    inputChange: TransactionType
}

const Table: React.FC< TableProps > = ({ transactions , onClickRow, inputChange }) => {

    function handleAllFilters(transaction: TransactionType): boolean {
        let newfilter = true;
        for (const key in inputChange) {
            if(!inputChange[key as keyof typeof inputChange] || inputChange[key as keyof typeof inputChange] === "") {
                newfilter &&= true
                continue;
            };
            if(key === 'description') {
                transaction.description?.includes(inputChange.description!) 
                ? newfilter &&= transaction.description?.includes(inputChange.description!)
                : newfilter &&= false
                continue;
            }
            console.log(key)
            newfilter &&= transaction[key as keyof TransactionType] === inputChange[key as keyof typeof inputChange]

        }
        return newfilter
        
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
                    transactions.map((transaction: TransactionType) => handleAllFilters(transaction) ? (
                        <TableDataRow 
                            onClickRow={onClickRow}
                            transaction={transaction}
                            key={transaction.id}
                        /> ) : (
                            null
                        )

                    )
                }
            </StyledTable.TBody>
        </StyledTable.Table>
    );
}

export default Table;
