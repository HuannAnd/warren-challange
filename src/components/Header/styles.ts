import styled, { Keyframes, keyframes } from "styled-components";

const warrenBouncing: Keyframes = keyframes`
	0%, 20%, 60% { transform: translateY(0);}
	40%   { transform: translateY(-10px); }
	80%   { transform: translateY(-5px); }
	100%  { transform: translateY(0); }
`

const warrenTextTop: Keyframes = keyframes`
	0% { transform: translateY(0px)}
	100% { transform: translateY(-100px)}
`

export const NavStyled = styled.nav`
	position: absolute;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: start;
	top: 0; left: 50%;

	transform: translate(-50%, 10px);


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
        left: -125px;

        transition-delay: 1s;
        animation-direction: alternate;
        animation: ${warrenBouncing} 1s ease-out forwards ;
    }
`

export const SpanStyled = styled.span`
    position: absolute;
    
    font-weight: 600;
    font-size: 3rem;
    color: #fff;
    text-align: center;

    visibility: visible;
    z-index: -1;
    opacity: 0;
    
    cursor: pointer;
    transform: translateX(-50px);
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