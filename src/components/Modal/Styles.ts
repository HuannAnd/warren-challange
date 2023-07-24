import styled, { keyframes } from "styled-components";

import { mediaQueries } from "@/constants/device";

import closeIcon from '@/assets/close-icon.svg';

export const Background = styled.div`
    position: absolute;
    display: flex;
    top: 50%; left: 50%;
    justify-content: center;
    align-items: center;

    border-radius: 99px;
    cursor: default;
    box-shadow: 0 0 0 100vmax rgba(0,0,0,.3);
    transform: translate(-50%, -50%);
    z-index: 1;
    
@media ${mediaQueries.sm} {
    background: none;
    position: static;
    height: auto;
    
}
`

const openingModal = keyframes`
    0%      { height: 554px; }
    100%    { height: 580px; }

`
const openingModalMobile = keyframes`
    from    { opacity: 0; }
    to      { opacity: 1; }
`

export const Modal = styled.section`
    position: relative;
    height: auto;
    width: 600px;
    padding: 20px 60px;

    border-radius: 20px;

    background-color: #ddd;
    z-index: 2;
    border: 2px solid #ffffff76;
    box-shadow: 0 0 10px #fff;

    animation: ${openingModal} 1750ms ease forwards;   

@media ${mediaQueries.sm} {
    position: absolute;
    display: grid;
    grid-template-columns: 200px 1fr;
    height: 100%;
    width: 100%;
    padding: 20px;
    top: 0;

    border-radius: 0;
    z-index: 2;

    animation: none;
    transition: 600ms;
    animation: ${openingModalMobile} 200ms linear;
}
`
export const H1 = styled.h1`
    text-align: center;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #e8175d;
    font-weight: 800;
    font-size: 2.4rem;
    margin-bottom: 50px;

@media ${mediaQueries.sm} {
    font-size: 1rem;
    width: 200px;
    text-align: center;
}
`

export const CloseIcon = styled.button`
@media ${mediaQueries.lg} {
    width: 62px;
    height: 62px;
}
    position: absolute;
    top: 0; left: calc(100% - 62px);
    width: 62px;
    height: 62px;

    background: url(${closeIcon});

    border: none;
    fill: #222;
    object-fit: contain;
    scale: 0.7;
    cursor: pointer;

@media ${mediaQueries.sm} {
    position: absolute;
    top: 0;
    left: 0;
    background: transparent;
    width: 100%;
    height: 100%;
}

`

const statusPainelAppear = keyframes`
    0%      { opacity: 0; }
    20%     { opacity: 0; }
    100%    { opacity: 1; }
`
interface StatusProps {
    status: string
}

function statusWidth(status: string) {
    switch (status) {
        case 'created':
            return '0px'
        case 'processing':
            return '158px'
        case 'processed':
            return '320px'
        default:
            return ''
    }
}

export const StatusPainel = styled.section<Pick<StatusProps, 'status'>>`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
    align-items: center;
    text-align: center;
    animation: ${statusPainelAppear} 1s linear;

@media ${mediaQueries.sm} { display: none; }

&::before {
    width: ${props => statusWidth(props.status)};
    border-radius: 10px;
    background: #fff;
    height: 10px;
    content: '';
    position: absolute;
    top: 50%;
    left: 80px;
    transform: translateY(-50%);
    height: 11px;
    z-index: -1;

@media ${mediaQueries.sm} { display: none; } 

}
`

interface SpanProps {
    opacityIsPointFive?: boolean
}

export const Span = styled.section<Pick<SpanProps, 'opacityIsPointFive'>>`
${StatusPainel} & {
    width: 20px;
    height: 20px;
    border: 4px solid #fff;
    background: #e8175d;
    box-shadow: 0 0 5px #ddd, 0 0 10px #ddd, 0 0 20px #ddd;
    border-radius: 50%;
    margin-inline: 70px;
    transition: 1s linear;
    opacity: ${props => props.opacityIsPointFive ? '1' : '.5'};
    cursor: pointer;
}
`
export const H3 = styled.h3`
${Span} & {
    text-align: center;
    transform: translate(-50%, 20px);
    position: absolute;
    width: 150px;
}
`
export const Transference = styled.section`
@media ${mediaQueries.sm} {
    font-size: .7rem;
}
`
export const H2 = styled.section`
    font-weight: 600;
    font-size: 1.3rem;
@media ${mediaQueries.sm} {
    font-size: .7rem;
}

`

export const Strong = styled.section`
    position: absolute;
    transform: translateX(-100%);
    font-weight: 600;
    right: 0;
@media ${mediaQueries.sm} {
    font-size: .6rem;
}
`
export const HR = styled.hr`
    margin-bottom: 30px;
`
