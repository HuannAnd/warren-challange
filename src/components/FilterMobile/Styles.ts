import styled from "styled-components";
import filterIcon from '../../assets/filter-icon.svg'
import { device } from "../Table/Styles";

export const Container = styled.div`
    visibility: hidden;

@media ${device.mobile} {
    visibility: visible;
    height: 52px;
    width: 52px;
    background: #222;
    box-shadow: 0 0 10px #111;
    border-radius: 10px;
    background-image: url(${filterIcon});
    cursor: pointer;
    background-repeat: no-repeat;
    background-position: center;
    
    &:hover , &:focus {
        filter: invert(1);
    }
}
`