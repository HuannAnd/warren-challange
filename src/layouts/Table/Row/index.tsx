import React, { useContext, useRef } from "react";

import TransactionType from "src/utils/TransactionType";

// import "./TableDataRow.css"
import * as Row from './Styles'

import Modal from "@/components/Modal";
import useModal from "@/hooks/useModal";


type TableDataRowProps = {
  transaction: TransactionType
}

export default function Component({ transaction }: TableDataRowProps) {
  const { selectedModals, handleModalRows } = useModal();

  return (
    <Row.Root onClick={(e) => handleModalRows(e, transaction)}>
      <Row.Data data-label="Title">{transaction.title}</Row.Data>
      <Row.Data data-label="Description">{transaction.description}</Row.Data>
      <Row.Data data-label="Status">{transaction.status}</Row.Data>
      <Row.Data data-label="Amount">{`R$${transaction.amount}`}</Row.Data>
      {selectedModals?.includes(transaction) && <Modal transaction={transaction} />}
    </Row.Root>
  )
}