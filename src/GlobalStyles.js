import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root{
        --primary: #FE0000;
        --textPrimary: #000000;
    }

    *{
        margin: 0;
        padding: 0;
        outline: 0;

        box-sizing: border-box;
    }

    body{
        font-family: Arial, Helvetica, sans-serif;
        color: var(--textPrimary);
    }

    button{
        padding: 10px;
        font-weight: bold;
        background-color: transparent;
        border: 2px solid var(--textPrimary);
        color: var(--textPrimary);
        cursor: pointer;
        transition: .2;

        :hover{
            border: 2px solid var(--primary);
            color: var(--primary);
        }

        :active{
            transform: scale(0.95);
        }
    }

`