import React from 'react'
import './Modal.css'
import { TransactionType } from '../../App'

interface ModalTypes {
    isOpen: boolean,
    setOpen: Function

}

const Modal: React.FC< ModalTypes & TransactionType> = ({setOpen ,  status , title , isOpen}) => {
    let progressStatus

    if(!isOpen) return null
    
    switch(status?.toUpperCase()) {
        case 'PROCESSED':
            progressStatus = {width: "10%"};

        break;
        case 'PROCESSING':
            progressStatus = {width: "50%"};

        break;
        case 'CREATED':
            progressStatus = {width: "100%"};

        break;
    }

    return ( 
        <div className='background'>
            <div className="modal">
                <h1>{title}</h1>
                <div className='close-icon' onClick={() => setOpen(false)}>x</div>
                <div className="status-painel">
                    <div style={progressStatus} className='progress-status-bar'></div>
                </div>
                <div className="transference"></div>
                <div className="to"></div>
            </div>
        </div>
    );
}
 
export default Modal;