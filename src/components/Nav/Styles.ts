import styled, {Keyframes, keyframes} from "styled-components";

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
const warrenTextAppear: Keyframes = keyframes`
    to { opacity: 1; }
`

const warrenBouncing: Keyframes = keyframes`
    0%, 20%, 60% {transform: translateY(0);}
    40%   { transform: translateY(-10px); }
    80%   { transform: translateY(-5px); }
    100%  { transform: translate(-125px, 0); }
`

export const ImageStyled = styled.img`
    height: 70px;
    cursor: pointer;

    ${NavStyled}:hover & 
    {
        animation: ${warrenBouncing} 1s ease-out forwards 900ms;
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

    ${NavStyled}:hover &
    {
        animation: ${warrenTextAppear} 1s ease-out forwards 900ms;
        animation-direction: alternate;
    }

`