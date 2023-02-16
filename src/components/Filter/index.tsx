import React, { useState } from 'react';
import './FilterTransaction.css'

interface FilterTransactionProps {
    onInputChange: Func<string, void>
    onStatusSelect: Func<string, void>
}

const FilterTransaction = ({ onInputChange, onStatusSelect }: FilterTransactionProps) => {
    const [inputData , setInputData] = useState<string>('')

    return (
        <div className="container-seacher">
            <div>
                <input
                    type="text"
                    value={inputData}
                    placeholder='Search by description of transaction'
                    onChange={(description) => setInputData(description.target.value)}
                />
                <button onClick={() => onInputChange(inputData)} />
            </div>
            <select className="status-filter" onChange={e => {
                console.log(e.target.value) 
                onStatusSelect(e.target.value)}}
            >
                <option></option>
                <option value='created'>created</option>
                <option value='processing'>processing</option>
                <option value='processed'>processed</option>
            </select>
        </div>
    );
}

export default FilterTransaction;