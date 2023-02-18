import React from "react";
import { TransactionType } from "../../Types/TransactionTypes";
import "./TableDataRow.css"
import * as C from './Styles'

export interface TableDataRowProps {
    onClickRow: (transaction: TransactionType) => void
    transaction: TransactionType
}

const TableDataRow: React.FC< TableDataRowProps > = ({ transaction, onClickRow }) => {
    return (
        <C.TRow>
            <C.TData onClick={() => onClickRow(transaction)}>{transaction.title}</C.TData>
            <C.TData>{transaction.description}</C.TData>
            <C.TData>{transaction.status}</C.TData>
            <C.TData>{`R$${transaction.amount}`}</C.TData>
        </C.TRow>
    )
}

export default TableDataRow;