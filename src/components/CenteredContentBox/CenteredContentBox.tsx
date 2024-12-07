import styled from "styled-components";

interface CenteredContentBoxProps {
    flexGrow?: boolean
}

export const CenteredContentBox = styled.div
    .withConfig({ shouldForwardProp: (prop) => prop !== 'flexGrow' })
    <CenteredContentBoxProps>`
    display: flex;
    ${(props) => props.flexGrow && 'flex-grow: 1'};
    justify-content: center;
    align-items: center;
`