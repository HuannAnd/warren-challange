import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *, *::before ,  *::after 
    {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body 
    {
        min-height: 100vh;
        justify-content: center;
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
        background: linear-gradient(145deg, #e02b57, #222);
        
    }
    #root
    {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        column-gap: 30px;
        margin-top: 150px;
    }
    


`