import styled from "styled-components";
import icon from '../../assets/arrow-icon.svg'
import { device } from "../../../Table/Styles";

export const Container = styled.div`
    width: 175px;
    position: relative;
    height: 100%;
    background: #222222;
    border-radius: 14px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    box-shadow: 0 0 6px #111;
    z-index: 1;

    @media ${device.mobile} {
        z-index: 3;
        display: none;
    }

`

export const Input = styled.div`

`

export const Menu = styled.div`
    position: absolute; 
    left: 0;
    transform: translateY(10px);
    width: 100%;
    height: 100px;
    max-height: 150px;
    box-shadow: 0 0 6px #111;
    z-index: 0;
`


interface PropsItem {
  isSelected: boolean
}

export const Item = styled.div<Pick<PropsItem, 'isSelected'>>`
    padding: 5px;
    color: ${props => props.isSelected ? "#ddd" : "#ccc"};
    background: ${props => props.isSelected ? "#333" : "#222"};
    text-align: center;
    font-weight: 600;
    

    &:hover {
        color: #fff;
    }

    &:first-child {
        color: rgba(255,255,255,.3);
    }
`

export const ValueOn = styled.div`
    color: #fff;
    font-weight: 600;
    opacity: .4;
`

export const Icon = styled.div`
    width: 23.79px;
    height: 11.35px;    
    position: relative;
    /* padding: 10px; */
    top: 2px;
    background-repeat: no-repeat;
    background: url(${icon});
    scale: 0.9;
`
