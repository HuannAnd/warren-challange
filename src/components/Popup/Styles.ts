import styled , {keyframes} from "styled-components";

interface StylesPopUpProps {
    displayBlock: boolean
}

const borderBottom = keyframes`
    from{ width: 0% }
    to { width: 100% }
`

const Popup = styled.div<Pick< StylesPopUpProps , 'displayBlock' >>`
    background: #222;
    display: ${props => props.displayBlock ? 'block' : 'none'};
    position: absolute;
    padding: 10px 20px;
    top: 0;
    right: 0;
    opacity: .5;
    z-index: 10;
    
    &::before {
        width: 0%;
        animation: ${borderBottom} 8s linear;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        background: #eee;
        content: '';
    }

`

const Paragraph = styled.p`
    color: #fff;
    font-size: 1rem;

`

const Span = styled.span`
    color: #e8175d;     
`

export {Popup , Paragraph, Span}