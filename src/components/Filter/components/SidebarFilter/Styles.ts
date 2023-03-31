import styled from "styled-components";

import backIcon from '@/assets/back-icon.svg'

import { mediaQueries } from "@/constants/device";


const Sidebar = styled.div`
    position: fixed;
    top: 0; right: 0; 
    visibility: hidden;
    transform: translateX(100%);
    opacity: 0;

@media ${mediaQueries.mobile} {
    visibility: hidden;
    position: fixed;
    transform: translateX(100%);
    display: flex;
    z-index: 5;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 0px 20px 60px;
    /* gap: 10px; */
    width: 332px;
    min-height: 100%;
    
    background: #222222;
    /* shadow-pattern */
    transition: transform 600ms;
    box-shadow: 0px 0px 10px #111;
    border-radius: 10px 0px 0px 10px;
    
    &.activated {
        transform: translateX(0%);
        transition: transform 600ms;
        visibility: visible;
        opacity: 1;
    }

    &.disabled {
        transform: translateX(100%);
        transition: transform 600ms;
        opacity: 0;
        visibility: hidden;
    }

}

`

const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 23px;
    scale: .7;
    position: relative;

`

const Text = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
    /* identical to box height */
    display: flex;
    text-transform: uppercase;
    text-align: center;

    color: #FFFFFF;

`

const Close = styled.div`
    width: 52px;
    height: 52px;
    padding: 10px;
    background-image: url(${backIcon});
    background-position: center;
    background-repeat: no-repeat;
    background-color: #222;
    box-shadow: 0px 0px 6px #111111;
    border-radius: 10px;
    cursor: pointer;

    :hover {
        filter: invert(1);
    }


`
const Menu = styled.div`
    display: flex;
    position: relative;
    bottom: 70px;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    align-self: flex-start;
    gap: 2rem;
    scale: .7;


`
const StatusFilter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 12px;

    width: 100%;
    height: 212px;

`
const Label = styled.span`
    /* SUBTITLE */

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

color: #FFFFFF;

    color: #FFFFFF;

`
const StatusOption = styled.li`
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
const AmountFilter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 6px;

    width: 190px;
    height: 152.48px;


`
const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 20px;

    width: 190px;
    height: 51px;

`
const InputLabel = styled.label`
    width: auto;
    white-space: nowrap;
    text-overflow: clip;
    /* BODY SMALL */

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */

    text-align: center;

    color: #FFFFFF;



`
const Input = styled.input`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 5px 10px;
    gap: 10px;

    width: 85px;
    height: 30px;

    background: #FFFFFF;
    /* shadow-pattern */

    box-shadow: 0px 0px 6px #111111;
    border-radius: 10px;


    &::placeholder {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;
        text-align: center;

        color: #CCCCCC;
    }

    &:focus {
        outline: none;
    }

`
const AmountOptions = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 21px;


`
interface AmountOptionProps {
    icon: string
}

const AmountOption = styled.li<Pick<AmountOptionProps, 'icon'>>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* padding: 7.39999px; */
    gap: 7.4px;
    background-image: url(${props => props.icon});
    background-repeat: no-repeat;
    background-position: center;
    width: 52px;
    height: 52px;
    padding: 10px;
    background-color: #222;
    box-shadow: 0px 0px 10px #111;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        filter: invert(1);
    }
    
    &.isSelected {
        filter: invert(1);
    }

`

export const Button = styled.button`
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px 30px;
    gap: 10px;

    width: auto;
    height: 44px;

    background: #D9D9D9;
    border-radius: 10px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-transform: uppercase;

    color: #222222;
    cursor: pointer;

    &:hover {
        filter: invert(1);
        transition: 300ms;
    }
`

export { Sidebar, Menu, AmountFilter, AmountOption, AmountOptions, Close, Container, Input, InputLabel, Label, StatusFilter, StatusOption, Text, Title }
