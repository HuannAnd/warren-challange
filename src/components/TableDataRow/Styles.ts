import styled from "styled-components";

export const TRow = styled.tr`
    display: grid;
    grid-template-columns: 215px 355px 200px 200px ;
    margin-bottom: 5px;
    padding: 10px 15px;
    min-width: 200px;

`
export const TData = styled.td`
    color: #fff;

    &:first-child
    {
        cursor: pointer;
    }
    &:nth-child(2n)
    {
        background: #e8175d;
    }
    &:nth-child(2n - 1)
    {
        background: #cc527a;
    }
`