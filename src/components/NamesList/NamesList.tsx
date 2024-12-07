import styled from "styled-components";
import {Modal} from "@/components";
import {ExpandMore} from "@/components/AnimatedIcons";
import {CenteredContentBox} from "@/components";
import {IconButton} from "@/components";

const Title = styled.h3`
    font-family: "Roboto", serif;
    font-size: 2rem;
    margin: 0;
`

const OrderedList = styled.ol`
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex-wrap: wrap;
    box-sizing: border-box;
    overflow: scroll;
`

const ListItem = styled.li`
    font-family: "Roboto", serif;
    font-size: 1.5rem;
    list-style-type: none;
`

const TopContainer = styled.div`
    position: fixed;
    padding-top: 20px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
`

const H3 = styled.h3`
    font-family: "Roboto", serif;
    font-size: 1rem;
    margin: 0;
`

export function NamesList({names, isOpen, onOpen, onClose}: NameListProps) {

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <Title>Liked Names:</Title>
                <OrderedList>
                    {names.sort().map((name, index) => (
                        <ListItem key={index}>{name}</ListItem>
                    ))}
                </OrderedList>
            </Modal>
            <TopContainer>
                <CenteredContentBox>
                    <IconButton onClick={onOpen}>
                        <H3>Liked Names</H3>
                        <ExpandMore/>
                    </IconButton>
                </CenteredContentBox>
            </TopContainer>
        </>
    )
}

export interface NameListProps {
    names: string[]
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}