import styled from "styled-components";
import * as MuiIcons from '@mui/icons-material';

export const ExpandMore = styled(MuiIcons.ExpandMore)`
    font-size: 2.5rem !important;
    transition: transform 300ms ease-in-out !important;
    transform-origin: bottom center;

    &:hover {
        transform: scale(0.9, 1.1) translateY(0.5rem);
    }
`;


