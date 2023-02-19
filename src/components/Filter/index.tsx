import React, { useState } from 'react';
import { TransactionType } from '../../Types/TransactionTypes';
import './FilterTransaction.css'
import { Inputchange } from '../Home';
interface FilterProps{
    setInputChange: Func<TransactionType, void>
    inputChange: TransactionType

}

const Filter: React.FC< FilterProps >  = ({ setInputChange , inputChange }) => {
    const [copyInputChange, setCopyInputChange] = useState< TransactionType >(inputChange)

    return (
        <div className="container-seacher">
            <div>
                <input
                    type="text"
                    placeholder='Search by description of transaction'
                    onChange={
                        (description) => setCopyInputChange(
                            { ...copyInputChange, description: description.target.value }
                        )}
                />
                <button onClick={() => setInputChange(copyInputChange)} />
            </div>
            <select className="status-filter" onChange={
                (status) => setCopyInputChange(
                    { ...copyInputChange, status: status.target.value }
                )}
            >
                <option value='' ></option>
                <option value='created'>created</option>
                <option value='processing'>processing</option>
                <option value='processed'>processed</option>
            </select>
        </div>
    );
}

export default Filter;