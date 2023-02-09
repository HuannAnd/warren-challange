import { useState } from 'react';
import { TransactionType } from '../App';
import TableDataRow from './TableDataRow';

interface LoaderTypes {
    transactions: TransactionType[] | null
    handleModalActivate: Function
}


const LoaderTransactions: React.FC<LoaderTypes> = ({ transactions, handleModalActivate }) => {
    if (transactions === null) {
        return null
    }

    return (
        <>
            {transactions.map((transaction) => 
                <TableDataRow 
                    handleModalActivate={handleModalActivate} 
                    key={transaction.id} 
                    id={transaction.id} 
                    title={transaction.title} 
                    description={transaction.description} 
                    status={transaction.status} 
                    amount={transaction.amount} 
                />)
            }
        </>
    );
}

export default LoaderTransactions;
