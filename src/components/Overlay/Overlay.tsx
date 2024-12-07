import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: flex-start;
`

export function Overlay({children, isOpen, onClose}: OverlayProps) {
    function handleClick(event: React.MouseEvent<HTMLDivElement>) {
        if (event.target === event.currentTarget) {
            event.stopPropagation()
            onClose()
        }
    }

    return isOpen && ReactDOM.createPortal(
        <Container onClick={handleClick}>
            {children}
        </Container>,
        document.body,
    )
}

interface OverlayProps {
    children: React.ReactNode
    isOpen: boolean
    onClose: () => void
}