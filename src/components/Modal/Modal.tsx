import React from "react";
import styled from "styled-components";
import {Overlay} from "@/components/Theme";
import {FlexBox} from "@/components/Theme";
import {IconButton} from "@/components/Theme";
import {ExpandLess} from "@/components/AnimatedIcons";

interface ContainerProps {
    $isClosing: boolean
}

const Container = styled.div<ContainerProps>`
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
    ${({$isClosing}) => !$isClosing && 'animation: slideIn 0.5s ease forwards'};
    ${({$isClosing}) => $isClosing && 'animation: slideOut 0.5s ease forwards'};

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

interface ModalProps {
    children: React.ReactNode
    isOpen: boolean
    onClose: () => void
}

export function Modal({children, isOpen, onClose}: ModalProps) {
    const [isClosing, setIsClosing] = React.useState<boolean>(false)

    function handleOnClose() {
        setIsClosing(true)
        setTimeout(() => {
            setIsClosing(false)
            onClose()
        }, 500)
    }

    return (
        <Overlay isOpen={isOpen} onClose={handleOnClose}>
            <Container $isClosing={isClosing}>
                <FlexBox $flexGrow $direction="column" $overflow="scroll">
                    {children}
                </FlexBox>
                <FlexBox $centered>
                    <IconButton onClick={handleOnClose}>
                        <ExpandLess/>
                    </IconButton>
                </FlexBox>
            </Container>
        </Overlay>
    )
}
