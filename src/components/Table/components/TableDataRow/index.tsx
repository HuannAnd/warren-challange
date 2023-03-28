import React, { useContext } from "react";

import TransactionType from "src/utils/TransactionType";

import "./TableDataRow.css"
import * as C from './Styles'

import Modal from "../../../Modal";

import { GlobalPropsContext } from "../../../Home";

import { ModalContext } from "../../..";

interface TableDataRowProps {
    transaction: TransactionType
}

const TableDataRow: React.FC<TableDataRowProps> = ({ transaction }) => {
    const { onClickRow, isOpen, setOpen } = useContext(GlobalPropsContext)
    const { selectedModals, handleModalRows } = useContext(ModalContext)

    return (
        <C.TRow onClick={() => { handleModalRows!(transaction) }}>
            <C.TData data-label="Title">{transaction.title}</C.TData>
            <C.TData data-label="Description">{transaction.description}</C.TData>
            <C.TData data-label="Status">{transaction.status}</C.TData>
            <C.TData data-label="Amount">{`R$${transaction.amount}`}</C.TData>
            {
                selectedModals?.includes(transaction) && (
                    <Modal
                        transaction={transaction!}
                    />
                )
            }
        </C.TRow>
    )
}

export default TableDataRow;