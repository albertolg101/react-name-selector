import type {BoxProps} from './Box';

import styled from "styled-components";
import {Box} from './Box';

export interface FlexBoxProps extends BoxProps {
    $direction?: 'row' | 'column'
    $flexGrow?: boolean
    $flexShrink?: boolean
    $flexWrap?: boolean
    $gap?: string
    $centered?: boolean
}

export const FlexBox = styled(Box)<FlexBoxProps>`
    display: flex;
    flex-direction: ${({$direction}) => $direction || 'row'};
    ${({$flexGrow}) => $flexGrow && 'flex-grow: 1'};
    ${({$flexShrink}) => $flexShrink && 'flex-shrink: 1'};
    ${({$flexWrap}) => $flexWrap && 'flex-wrap: wrap'};
    ${({$gap}) => $gap && `gap: ${$gap}`};
    ${({$centered}) => $centered && "justify-content: center"};
    ${({$centered}) => $centered && "align-items: center"};
    
`