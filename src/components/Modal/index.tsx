import TransactionType from 'src/utils/TransactionType'

import * as Modal from './Styles'

import { useEffect, useRef } from 'react'
import useModal from '@/hooks/useModal'

type ModalProps = {
  transaction: TransactionType
}

export default function Component({ transaction }: ModalProps) {
  const modal = useRef<HTMLDialogElement>(null!)

  const { selectedModals } = useModal()

  useEffect(() => {
    console.log("useEffect to show modal has fired")
    if (selectedModals.includes(transaction)) {
      modal.current.showModal()
    }

    return 
  },
    [selectedModals]
  )
  useEffect(() => {
    const handleWindowClick = () => modal.current.close()

    window.addEventListener("click", handleWindowClick)
    return () => {
      window.removeEventListener("click", handleWindowClick)
    }
  },
    []
  )
  function handleModalClosing(e: React.MouseEvent<Element, MouseEvent>) {
    e.stopPropagation()
    modal.current.close()
  }

  return (
    <Modal.Root open ref={modal}>
      <Modal.H1>{transaction.title}</Modal.H1>
      <Modal.CloseIcon onClick={handleModalClosing} />

      <Modal.StatusPainel status={transaction.status!}>
        <Modal.Span
          opacityIsPointFive={transaction.status === 'created'}
        ><Modal.H3>Criado</Modal.H3>
        </Modal.Span>
        <Modal.Span
          opacityIsPointFive={transaction.status === 'processing'}
        ><Modal.H3>Em processo</Modal.H3>
        </Modal.Span>
        <Modal.Span
          opacityIsPointFive={transaction.status === 'processed'}
        ><Modal.H3>Processado</Modal.H3>
        </Modal.Span>
      </Modal.StatusPainel>

      <Modal.Transference>
        <Modal.H2>Transferindo de</Modal.H2>
        <Modal.Span>{transaction.from}</Modal.Span>
        <Modal.Strong>{`R$${transaction.amount}`}</Modal.Strong>
        <Modal.HR />
        <Modal.H2>Para</Modal.H2>
        <Modal.Span>{transaction.to}</Modal.Span>
        <Modal.Strong>{`R$${transaction.amount}`}</Modal.Strong>
        <Modal.HR />
      </Modal.Transference>

    </Modal.Root>
  );
}