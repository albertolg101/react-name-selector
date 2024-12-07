import styled from "styled-components";
import React from "react";
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
    left: 0;
    right: 0;
`

export function NamesList({names}: NameListProps) {
    const [showNamesList, setShowNamesList] = React.useState<boolean>(false)

    return (
        <>
            {showNamesList &&
                <Modal isOpen={showNamesList} onClose={() => setShowNamesList(false)}>
                    <Title>Liked Names:</Title>
                    <OrderedList>
                        {names.sort().map((name, index) => (
                            <ListItem key={index}>{name}</ListItem>
                        ))}
                    </OrderedList>
                </Modal>
            }
            <TopContainer>
                <CenteredContentBox>
                    <IconButton onClick={() => setShowNamesList(true)}>
                        <ExpandMore/>
                    </IconButton>
                </CenteredContentBox>
            </TopContainer>
        </>
    )
}

export interface NameListProps {
    names: string[]
}