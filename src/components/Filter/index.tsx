import React, { useState } from 'react';
import { TransactionType } from '../../Types/TransactionTypes';
import './FilterTransaction.css'

interface Filter {
    onInputChange: Func<FilterObject, void>
    
}

interface FilterObject {
    filterDescritption: string | boolean
    filterStatus: string | boolean
}

const Filter = ({ onInputChange }: Filter) => {
    const [inputData, setInputData] = useState< FilterObject >({ filterDescritption: true, filterStatus: true })

    // transactions.filter(transaction => handleFilter(transaction))

    return (
        <div className="container-seacher">
            <div>
                <input
                    type="text"
                    value=''
                    placeholder='Search by description of transaction'
                    onChange={
                        (description) => setInputData(
                            { ...inputData, filterDescritption: description.target.value }
                        )}
                />
                <button onClick={() => onInputChange(inputData)} />
            </div>
            <select className="status-filter" onChange={
                        (status) => setInputData(
                            { ...inputData, filterStatus: status.target.value }
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