import React from 'react'
import './Modal.css'
import { TransactionType } from '../../Types/TransactionTypes'
import * as ModalStyles from './Styles'
export interface ModalProps {
    isOpen: boolean,
    setOpen: Function,
    transaction: TransactionType
}

const Modal: React.FC< ModalProps > = ({ setOpen , transaction , isOpen }) => {
    if(!isOpen) return null
    
    return (
        <ModalStyles.Background>
            <ModalStyles.Modal>
                <ModalStyles.H1>{transaction.title}</ModalStyles.H1>
                <ModalStyles.CloseIcon onClick={() => setOpen(false)}/>
                <ModalStyles.StatusPainel>
                    <ModalStyles.Span><ModalStyles.H3>Criado</ModalStyles.H3></ModalStyles.Span>
                    <ModalStyles.Span><ModalStyles.H3>Em processo</ModalStyles.H3></ModalStyles.Span>
                    <ModalStyles.Span><ModalStyles.H3>Processado</ModalStyles.H3></ModalStyles.Span>
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
        // <div className='background'>
        //     <div className="modal">
        //         <h1>{transaction.title}</h1>
        //         <div className='close-icon' onClick={() => setOpen(false)}></div>
        //         <div className="status-painel">
        //             <span><h3>Criado</h3></span>
        //             <span><h3>Em processo</h3></span>
        //             <span><h3>Processado</h3></span>
        //         </div>
        //         <div className="transference">
        //             <h2>Transferindo de</h2>
        //             <span>{transaction.from}</span>
        //             <strong>{`R$${transaction.amount}`}</strong>
        //             <hr></hr>
        //             <h2>Para</h2>
        //             <span>{transaction.to}</span>
        //             <strong>{`R$${transaction.amount}`}</strong>
        //             <hr></hr>
        //         </div>
        //     </div>
        // </div>
    );
}
 
export default Modal;