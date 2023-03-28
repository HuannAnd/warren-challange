import styled, { FlattenSimpleInterpolation } from "styled-components";


const Container = styled.div<Pick<{ currentStyles: FlattenSimpleInterpolation }, 'currentStyles'>>`
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border-radius: 10px;
    
    ${props => props.currentStyles}
`

const Input = styled.input`
    width: 300px;
    height: 32px;
    padding: 10px;
    
    color: #fff;
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    
    background: #222;
    box-sizing: content-box;
    box-shadow: 0 0 6px #111;
    border: none;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    

&:focus {
    outline: none;
}
&::placeholder {
    color: #fff;
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
    opacity: 0.3;
}
`

const Button = styled.button<Pick<{ currentStyles: FlattenSimpleInterpolation }, 'currentStyles'>>`
    position: relative;
    width: 32px;
    height: 32px;
    padding: 10px;

    
    box-sizing: content-box;
    background-color: #222;
    background-position: center;
    background-repeat: no-repeat;
    border: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 0 0 6px #111;

    cursor: pointer;
    transition: 1s ease;

    ${props => props.currentStyles}

&:hover {
    filter: invert(1);
}

&:focus {
    outline: none;
}
`

export { Container, Input, Button }