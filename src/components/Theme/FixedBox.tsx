import type {BoxProps} from './Box';

import styled from 'styled-components';
import {Box} from './Box';

export interface FixedBoxProps extends BoxProps {
    $top?: string
    $left?: string
    $right?: string
    $bottom?: string
}

export const FixedBox = styled(Box)<FixedBoxProps>`
    position: fixed;
    ${({$top}) => $top && `top: ${$top}`};
    ${({$left}) => $left && `left: ${$left}`};
    ${({$right}) => $right && `right: ${$right}`};
    ${({$bottom}) => $bottom && `bottom: ${$bottom}`};
`