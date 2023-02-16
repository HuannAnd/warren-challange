import React from 'react'
import './Modal.css'
import { TransactionType } from '../../Types/TransactionTypes'
export interface ModalProps {
    isOpen: boolean,
    setOpen: Function,
    transaction: TransactionType
}

const Modal: React.FC< ModalProps > = ({ setOpen , transaction , isOpen }) => {
    if(!isOpen) return null
    
    return ( 
        <div className='background'>
            <div className="modal">
                <h1>{transaction.title}</h1>
                <div className='close-icon' onClick={() => setOpen(false)}></div>
                <div className="status-painel">
                    <span><h3>Criado</h3></span>
                    <span><h3>Em processo</h3></span>
                    <span><h3>Processado</h3></span>
                </div>
                <div className="transference">
                    <h2>Transferindo de</h2>
                    <span>{transaction.from}</span>
                    <strong>{`R$${transaction.amount}`}</strong>
                    <hr></hr>
                    <h2>Para</h2>
                    <span>{transaction.to}</span>
                    <strong>{`R$${transaction.amount}`}</strong>
                    <hr></hr>
                </div>
            </div>
        </div>
    );
}
 
export default Modal;