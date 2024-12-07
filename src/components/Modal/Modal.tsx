import React from "react";
import styled from "styled-components";
import {Overlay} from "@/components";
import {CenteredContentBox} from "@/components";
import {IconButton} from "@/components";
import {ExpandLess} from "@/components/AnimatedIcons";

const Container = styled.div
   .withConfig({
        shouldForwardProp: (prop) => prop !== 'isClosing'
    })<{ isClosing: boolean }>`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 70%;
    height: 80%;
    min-width: 400px;
    min-height: 400px;
    padding: 20px 20px 10px 20px;
    box-sizing: border-box;
    border-radius: 0 0 20px 20px;
    ${(props) => !props.isClosing && 'animation: slideIn 0.5s ease forwards'};
    ${(props) => props.isClosing && 'animation: slideOut 0.5s ease forwards'};

    @keyframes slideIn {
        from {
            transform: translateY(-100%);
        }
        to {
            transform: translateY(0);
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(-100%);
        }
    }
`

const ChildrenContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`

export function Modal({children, isOpen, onClose}: ModalProps) {
    const [isClosing, setIsClosing] = React.useState<boolean>(false)

    function handleOnClose() {
        setIsClosing(true)
        setTimeout(() => onClose(), 500)
    }

    return (
        <Overlay isOpen={isOpen} onClose={handleOnClose}>
            <Container isClosing={isClosing}>
                <ChildrenContainer>
                    {children}
                </ChildrenContainer>
                <CenteredContentBox>
                    <IconButton onClick={handleOnClose}>
                        <ExpandLess/>
                    </IconButton>
                </CenteredContentBox>
            </Container>
        </Overlay>
    )
}

interface ModalProps {
    children: React.ReactNode
    isOpen: boolean
    onClose: () => void
}