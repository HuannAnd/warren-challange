import styled from "styled-components";

export const StatusOption = styled.li`
    padding: 10px 27px;
    gap: 10px;

    width: 142px;

    background: #222222;
    /* shadow-pattern */

    box-shadow: 0px 0px 6px #111111;
    border-radius: 10px;
    text-align: center;
    color: #fff;
    align-self: center;
    list-style: none;
    cursor: pointer;
    :hover {
        filter: invert(1);
    }
    &.isSelected {
        filter: invert(1);
    }
`