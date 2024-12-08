import styled from "styled-components";

type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p" | "button" | "subtitle1" | "subtitle2";
type FontWeight = "light" | "regular" | "medium" | "bold";

export interface TypographyProps {
    as?: TypographyVariant
    $color?: string
    $size?: TypographyVariant
    $weight?: FontWeight
    $italic?: boolean
    $underline?: boolean
    $margin?: string
    $hoverColor?: string
    $underlinedOnHover?: boolean
}

export const Typography = styled.p<TypographyProps>`
    font-family: ${({theme}) => theme.font.family};
    color: ${({theme, $color}) => $color || theme.palette.text.primary};
    font-size: ${({theme, $size, as}) => theme.font.sizes[$size || as || 'p']};
    font-weight: ${({theme, $weight}) => theme.font.weights[$weight || "regular"]};
    font-style: ${({$italic}) => $italic ? "italic" : "normal"};
    text-decoration: ${({$underline}) => $underline ? "underline" : "none"};
    cursor: ${({$underlinedOnHover}) => $underlinedOnHover ? "pointer" : "default"};
    margin: ${({$margin, theme, $size, as}) => $margin || theme.font.margin[$size || as || 'p']};

    &:hover {
        color: ${({$hoverColor, $color}) => $hoverColor || $color};
        text-decoration: ${({$underlinedOnHover}) => $underlinedOnHover ? "underline" : "none"};
    }
`