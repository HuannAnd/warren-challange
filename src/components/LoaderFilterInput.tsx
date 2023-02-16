// import React from 'react'
// import { TransactionType } from '../Types'
// import TableDataRow from './TableDataRow'

// export interface LoaderFilterProps {
//     transactions: TransactionType[] | null
//     descriptionFilter: string | undefined
//     handleModalActivate: (transaction: TransactionType) => void
//     selectFilter: string | null
// }

// const LoaderFilterInput: React.FC< LoaderFilterProps > = ({ transactions, descriptionFilter, handleModalActivate, selectFilter }) => {


//     if ( !descriptionFilter && !selectFilter) {
//         return (
//             <>
//                 {transactions?.map(transaction =>
//                     <TableDataRow
//                         handleModalActivate={handleModalActivate}
//                         key={transaction.id}
//                         transaction={transaction}
//                     />
//                 )}
//             </>
//         )
//     } else if (!descriptionFilter  && selectFilter) {
//         return (
//             <>
//                 {transactions?.map(
//                     transaction => transaction.status === selectFilter
//                         ?
//                         (<TableDataRow
//                             handleModalActivate={handleModalActivate}
//                             key={transaction.id}
//                             transaction={transaction}
//                         />)
//                         : null
//                 )}
//             </>
//         );
//     }
//     else if (descriptionFilter !== undefined && selectFilter === null) {
//         return (
//             <>
//                 {transactions?.map(
//                     transaction => transaction.description?.includes(descriptionFilter)
//                         ?
//                         (<TableDataRow
//                             handleModalActivate={handleModalActivate}
//                             key={transaction.id}
//                             transaction={transaction}
//                         />)
//                         : null
//                 )}
//             </>
//         )
//     }
//     else {
//         return (
//             <>
//                 {transactions?.map(
//                     transaction => transaction.description?.includes(descriptionFilter!) && transaction?.status === selectFilter
//                         ?
//                         (<TableDataRow
//                             handleModalActivate={handleModalActivate}
//                             key={transaction.id}
//                             transaction={transaction}
//                         />)
//                         : null
//                 )}
//             </>
//         )
//     }
// }



// export default LoaderFilterInput;