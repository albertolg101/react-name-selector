import { createGlobalStyle } from 'styled-components';

export const CustomTheme = {
    font: {
        family: 'Roboto, serif',
        sizes: {
            h1: '4.5rem',
            h2: '3.5rem',
            h3: '2.5rem',
            h4: '2rem',
            h5: '1.5rem',
            h6: '1.2rem',
            button: '1.5rem',
            p: '1rem',
            subtitle1: '0.8rem',
            subtitle2: '0.6rem',
            span: "inherit",
        },
        margin: {
            h1: '2rem 0',
            h2: '1.5rem 0',
            h3: '1rem 0',
            h4: '0.8rem 0',
            h5: '0.6rem 0',
            h6: '0.5rem 0',
            button: '0.2rem 0.6rem',
            p: '0.5rem 0',
            subtitle1: '0.3rem 0',
            subtitle2: '0.2rem 0',
            span: "0"
        },
        weights: {
            light: 300,
            regular: 400,
            medium: 500,
            bold: 600,
        },
    },
    button: {
        contained: {
            color: '#FFFFFF',
            background: '#2EC4B6',
            hoverColor: '#FFFFFF',
            hoverBackground: '#2AAFA6',
        },
        outlined: {
            color: '#2EC4B6',
            background: '#FFFFFF',
            hoverColor: '#2AAFA6',
            hoverBackground: '#ECFAF8',
        }
    },
    palette: {
        text: {
            primary: '#171717'
        },
        background: {
            body: '#F5F5F5',
            primary: '#FFFFFF',
        },
    },
}

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: ${({theme}) => theme.font.family};
        background-color: ${({theme}) => theme.palette.background.body};
        margin: 0;
    }
    
    #root {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
