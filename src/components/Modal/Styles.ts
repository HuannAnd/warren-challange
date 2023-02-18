import styled, {keyframes} from "styled-components";

export const Background = styled.div`
    position: absolute;
    background: #1111119f;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;    
`
const openingModal = keyframes`
    0% {
        height: 400px;
    }
    100% {
        height: 500px;
    }
`

export const Modal = styled.section`
    position: relative;
    height: auto;
    width: 600px;
    border-radius: 20px;
    background-color: #ddd;
    z-index: 2;
    padding: 20px 60px;
    border: 2px solid #ffffff76;
    box-shadow: 0 0 10px #fff;
    animation: ${openingModal} 1750ms ease forwards;   
`

export const H1 = styled.h1`
    text-align: center;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #e8175d;
    font-weight: 600;
    margin-bottom: 50px;
`
export const CloseIcon = styled.section`
    position: absolute;
    top: 0;
    left: calc(100% - 62px);
    fill: #222;
    object-fit: contain;
    width: 62px;
    height: 62px;
    scale: 0.7;
    /* background-color: #fff; */
    cursor: pointer;
    background: url(../../assets/close-icon.svg);
`

const statusPainelAppear = keyframes`
  0% { opacity: 0; }
  20% { opacity: 0; }
  100% { opacity: 1; }
`

export const StatusPainel = styled.section`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
    align-items: center;
    text-align: center;
    animation: ${statusPainelAppear} 1s linear;
`
export const Span = styled.section`
${StatusPainel} & {
    width: 20px;
    height: 20px;
    border: 4px solid #fff;
    background: #e8175d;
    box-shadow: 0 0 5px #ddd, 0 0 10px #ddd, 0 0 20px #ddd;
    border-radius: 50%;
    margin-inline: 70px;
    transition: 1s linear;
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

`
export const H2 = styled.section`

`
// export const TSpan = styled.section`

// `
export const Strong = styled.section`
    position: absolute;
    transform: translateX(-100%);
    font-weight: 600;
    right: 0;
`
export const HR = styled.hr`
    margin-bottom: 50px;
`
