import React from "react";
import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: flex-start;
`

export function Modal({children, onClose}: ModalProps) {

    function handleClick(event: React.MouseEvent<HTMLDivElement>) {
        if (event.target === event.currentTarget) {
            event.stopPropagation()
            onClose()
        }
    }

    return <Container onClick={handleClick}>{children}</Container>
}

interface ModalProps {
    children: React.ReactNode
    onClose: () => void
}