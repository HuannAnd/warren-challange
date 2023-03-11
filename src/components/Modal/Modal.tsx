import React, { useContext } from 'react'
// import './Modal.css'
import { TransactionType } from '../../Types/TransactionTypes'
import { GlobalPropsContext } from '../Home'
import { ModalContext } from '../Table'
import * as ModalStyles from './Styles'
export interface ModalProps {
    transaction: TransactionType
}

const Modal: React.FC< ModalProps > = ({ transaction }) => {
    const { handleModalRows } = useContext(ModalContext)
    
    return (
        <ModalStyles.Background>
            <ModalStyles.Modal>
                <ModalStyles.H1>{transaction.title}</ModalStyles.H1>
                <ModalStyles.CloseIcon onClick={() => handleModalRows!(transaction)}/>
                <ModalStyles.StatusPainel status={transaction.status!}>
                    <ModalStyles.Span opacityIsPointFive={transaction.status === 'created'}><ModalStyles.H3>Criado</ModalStyles.H3></ModalStyles.Span>
                    <ModalStyles.Span opacityIsPointFive={transaction.status === 'processing'}><ModalStyles.H3>Em processo</ModalStyles.H3></ModalStyles.Span>
                    <ModalStyles.Span opacityIsPointFive={transaction.status === 'processed'}><ModalStyles.H3>Processado</ModalStyles.H3></ModalStyles.Span>
                    
                </ModalStyles.StatusPainel>
                <ModalStyles.Transference>
                    <ModalStyles.H2>Transferindo de</ModalStyles.H2>
                    <ModalStyles.Span>{transaction.from}</ModalStyles.Span>
                    <ModalStyles.Strong>{`R$${transaction.amount}`}</ModalStyles.Strong>
                    <ModalStyles.HR />
                    <ModalStyles.H2>Para</ModalStyles.H2>
                    <ModalStyles.Span>{transaction.to}</ModalStyles.Span>
                    <ModalStyles.Strong>{`R$${transaction.amount}`}</ModalStyles.Strong>
                    <ModalStyles.HR />
                </ModalStyles.Transference>
            </ModalStyles.Modal>

        </ModalStyles.Background>
    );
}
 
export default Modal;