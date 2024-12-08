import styled from 'styled-components';

type buttonVariant = "contained" | "outlined";

export interface ButtonProps {
    $variant: buttonVariant
}

export const Button = styled.button<ButtonProps>`
    font-family: ${({theme}) => theme.font.family};
    font-size: ${({theme}) => theme.font.sizes.button};
    color: ${({$variant, theme}) => (
            $variant === 'contained' ?
                    theme.button.contained.color :
                    theme.button.outlined.color
    )};
    background-color: ${({$variant, theme}) => (
        $variant === 'contained' ? 
                theme.button.contained.background :
                theme.button.outlined.background
    )};
    border: 2px solid ${({$variant, theme}) => (
        $variant === 'contained' ? 
                theme.button.contained.background :
                theme.button.outlined.color
    )};
    padding: 0.2rem 0.6rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover, &:active {
        color: ${({$variant, theme}) => (
            $variant === 'contained' ?
                    theme.button.contained.hoverColor :
                    theme.button.outlined.hoverColor
        )};
        background-color: ${({$variant, theme}) => (
            $variant === 'contained' ? 
                    theme.button.contained.hoverBackground :
                    theme.button.outlined.hoverBackground
        )};
        border-color: ${({$variant, theme}) => (
            $variant === 'contained' ? 
                    theme.button.contained.hoverBackground :
                    theme.button.outlined.hoverColor
        )
    }
`