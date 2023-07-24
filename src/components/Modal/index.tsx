import { useModal } from '@/hooks/useModal'

import TransactionType from 'src/utils/TransactionType'

import * as ModalS from './styles'
import { ForwardedRef, MutableRefObject, forwardRef, useEffect, useRef } from 'react'

type ModalProps = {
  transaction: TransactionType
}

const Modal = ({
  transaction
}: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null!);

  const { handleModalRows } = useModal(ref as MutableRefObject<HTMLDivElement>);

  return (
    <ModalS.Background>
      <ModalS.Modal ref={ref}>
        <ModalS.H1>{transaction.title}</ModalS.H1>
        <ModalS.CloseIcon onClick={() => handleModalRows(transaction)} />

        <ModalS.StatusPainel status={transaction.status!}>
          <ModalS.Span
            opacityIsPointFive={transaction.status === 'created'}
          ><ModalS.H3>Criado</ModalS.H3>
          </ModalS.Span>
          <ModalS.Span
            opacityIsPointFive={transaction.status === 'processing'}
          ><ModalS.H3>Em processo</ModalS.H3>
          </ModalS.Span>
          <ModalS.Span
            opacityIsPointFive={transaction.status === 'processed'}
          ><ModalS.H3>Processado</ModalS.H3>
          </ModalS.Span>
        </ModalS.StatusPainel>

        <ModalS.Transference>
          <ModalS.H2>Transferindo de</ModalS.H2>
          <ModalS.Span>{transaction.from}</ModalS.Span>
          <ModalS.Strong>{`R$${transaction.amount}`}</ModalS.Strong>
          <ModalS.HR />
          <ModalS.H2>Para</ModalS.H2>
          <ModalS.Span>{transaction.to}</ModalS.Span>
          <ModalS.Strong>{`R$${transaction.amount}`}</ModalS.Strong>
          <ModalS.HR />
        </ModalS.Transference>

      </ModalS.Modal>
    </ModalS.Background>
  );
}

export default Modal;