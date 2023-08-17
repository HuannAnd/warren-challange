import styled from "styled-components";

import { mediaQueries } from "@/constants/device";


export const Root = styled.tr`
    display: grid;
    grid-template-columns: 215px 355px 200px 200px;
    margin-bottom: 5px;
    min-width: 200px;

    &:hover {
        cursor: pointer;
    }
    
@media ${mediaQueries.sm} {
    position: relative;
    display: block;
    width: 100%;
    margin-bottom: 15px;
    box-shadow: 0 0 12px #111;
    
}
`

export const Data = styled.td`
    color: #fff;
    padding: 10px 15px;
    position: relative;
    
@media ${mediaQueries.sm} {
    display: block;
    width: 100%;
    text-align: right;
    
    &::before {
        content: attr(data-label);
        position: absolute;
        left: 0;
        width: 50%;
        padding-left: 16px;
        text-align: left;
        text-transform: uppercase;
        font-weight: 800;
        letter-spacing: 2px;
        color: #fff;
    }
}

&:first-child       { cursor: pointer; }
&:nth-child(2n)     { background: #e8175d; }
&:nth-child(2n - 1) { background: #cc527a; }
    
`