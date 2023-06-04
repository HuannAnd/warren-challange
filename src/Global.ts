import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    *, *::before ,  *::after 
    {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Poppins', sans-serif;
    }

    ::-webkit-scrollbar {
        width: .4rem;
        background: #222;
        box-shadow: 0 0 10px #111;
    }
    ::-webkit-scrollbar-track {
        border-radius: 10px;
        box-shadow: 0 0 10px #111;
    }
    ::-webkit-scrollbar-thumb { 
        background: #fff; 
        border-radius: 5px;
        border: .05em solid #111;
    }
    ::-webkit-scrollbar-thumb:hover { 
        background: #aaa; 
        
    }

    h1 , h2 , h3 
    {
        font-family: 'Poppins';
    }
    h1 { font-size: 2.5em }
    /* h2 {font-size: }
    h3 {} */
    p { font-size: 1em }
    
    html
    {
        font-family: 'Poppins' , sans-serif;
        font-size: 1.125em;
        background: linear-gradient(145deg, #e02b57, #222); 
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