import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        font-size: 60%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0
    }

    body {
        -webkit-font-smoothing: antialiased;
        background: #EEE;
    }

    body, input, button {
        font-size: 16px;
        color: #000;

    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;

    }

    button {
        cursor: pointer;
    }
`;
