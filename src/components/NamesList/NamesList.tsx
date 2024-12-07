import styled from "styled-components";
import {Close} from "@mui/icons-material";
import {IconButton} from "@/components";
import {Modal} from "@/components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 70%;
    height: 80%;
    min-width: 400px;
    min-height: 400px;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 0 0 20px 20px;
`

const TopContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
`

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

export function NamesList({names, onClose}: NameListProps) {
    return (
        <Modal onClose={onClose}>
            <Container>
                <TopContainer>
                    <IconButton onClick={onClose}>
                        <Close fontSize="large"/>
                    </IconButton>
                </TopContainer>
                <Title>Liked Names:</Title>
                <OrderedList>
                    {names.sort().map((name, index) => (
                        <ListItem key={index}>{name}</ListItem>
                    ))}
                </OrderedList>
            </Container>
        </Modal>
    )
}

export interface NameListProps {
    names: string[]
    onClose: () => void
}