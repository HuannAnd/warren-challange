import React from "react";
import { TransactionType } from "../App";

interface TableDataType {
    handleModalActivate: Function
}

const TableDataRow: React.FC< TransactionType & TableDataType > = ({ id , title , description , status , amount , handleModalActivate }) => {
    return (
        <tr>
            <td onClick={() => handleModalActivate(id)}>{title}</td>
            <td>{description}</td>
            <td>{status}</td>
            <td>{`R$ ${amount}`}</td>
        </tr>
    )
}

export default TableDataRow;