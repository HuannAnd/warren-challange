import styled, {Keyframes, keyframes} from "styled-components";

const warrenBouncing: Keyframes = keyframes`
    0%, 20%, 60% {transform: translateY(0);}
    40%   { transform: translateY(-10px); }
    80%   { transform: translateY(-5px); }
    100%  { transform: translateY(0); }
`

const warrenTextTop: Keyframes = keyframes`
    0% { transform: translateY(0px)}
    100% { transform: translateY(-100px)}
`

export const NavStyled = styled.nav`
    justify-content: start;
    align-items: center;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 10px);
    display: flex;
    flex-direction: row;


`

export const ImageStyled = styled.img`
    position: relative;
    left: 0;
    height: 70px;
    cursor: pointer;
    transform: translateX(0px);
    transition: left 1s ;

    ${NavStyled}:hover &
    {
        animation: ${warrenBouncing} 1s ease-out forwards ;
        transition-delay: 1s;
        left: -125px;
        animation-direction: alternate;
    }
`

export const SpanStyled = styled.span`
    color: #fff;
    font-size: 3rem;
    text-align: center;
    visibility: visible;
    position: absolute;
    z-index: -1;
    opacity: 0;
    transform: translateX(-50px);
    font-weight: 600;
    cursor: pointer;
    transition: filter 2s 0s;   
    transition-timing-function: ease-in;
    animation: ${warrenTextTop} 1s;
    
    ${NavStyled}:hover &
    {
        opacity: 1;
        animation-direction: alternate;
        transition: opacity 1.5s 1600ms;
    }

`