import styled from 'styled-components';

type buttonVariant = "contained" | "outlined";

export const Button = styled.button<{ variant: buttonVariant }>`
    color: ${(props) => (props.variant === 'contained' ? '#FFFFFF' : '#2EC4B6')};
    background-color: ${(props) => (props.variant === 'contained' ? '#2EC4B6' : '#FFFFFF')};
    border: 2px solid #2EC4B6;
    padding: 0.2rem 0.6rem;
    border-radius: 0.5rem;
    font-family: 'Roboto', serif;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.2s;
    
    &:hover, &:active {
        color: ${(props) => (props.variant === 'contained' ? '#FFFFFF' : '#2AAFA6')};
        background-color: ${(props) => (props.variant === 'contained' ? '#2AAFA6' : '#ECFAF8')};
        border-color: #2AAFA6;
    }
`