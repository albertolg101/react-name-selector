import styled from "styled-components";

export const CenteredContentBox = styled.div
    .withConfig({ shouldForwardProp: (prop) => prop !== 'flexGrow' })
    <{ flexGrow: boolean }>`
    display: flex;
    ${(props) => props.flexGrow && 'flex-grow: 1'};
    justify-content: center;
    align-items: center;
`