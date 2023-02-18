import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    height: 52px;
    width: auto;
    gap: 20px;   
`
export const Div = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: auto;
`
export const Input = styled.input`
    height: 32px;
    box-sizing: content-box;
    padding: 10px;
    box-shadow: 0 0 6px #111;
    border: none;

    background: #222;
    border: none;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    color: #fff;
    width: 300px;
    color: #fff;
    font-size: 1rem;
    font-family: "Poppins", sans-serif;

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
export const Button = styled.button`
    height: 32px;
    box-sizing: content-box;
    padding: 10px;
    box-shadow: 0 0 6px #111;
    border: none;

    position: relative;
    background-color: #222;
    background-image: url(../../assets/search-icon.svg);
    background-size: 25px;
    background-position: center;
    background-repeat: no-repeat;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    width: 32px;
    box-sizing: content-box;
    cursor: pointer;
    transition: 1s ease;

&:hover {
    filter: invert(1);
}

&:focus {
    outline: none;
}

`
export const Select = styled.select`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: #222;
    color: #fff;
    font-family: "Poppins", sans-serif;
    outline: none;
    border: none;
    border-radius: 10px;
    font-size: 0.8rem;
    cursor: pointer;
`
export const Option = styled.option`
    color: #fff;
    font-family: "Poppins", sans-serif;
    width: 20px;
    height: 200px;
    border: none;
    cursor: pointer;
`