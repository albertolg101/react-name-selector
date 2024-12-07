import styled from 'styled-components';
import {Cached} from "@mui/icons-material";
import {Button} from "@/components";
import {IconButton} from "@/components";

const Card = styled.div`
    position: relative;
    background-color: #FFFFFF;
    box-shadow: -4px -3px 45px 21px rgba(0, 0, 0, 0.10);
    border-radius: 20px;
    padding: 20px;
    height: 510px;
    width: 340px;
    display: flex;
    flex-direction: column;
`

const TopContainer = styled.div``

const NameContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

const Name = styled.div`
    color: #2C302E;
    font-size: 4.5rem;
    font-weight: 500;
`

const BottomContainer = styled.div`
    color: #2C302E;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
`

const Message = styled.span`
    color: #2C302E;
    font-size: 1.2rem;
    padding: 0 10px;
`

export function NameSelector({ name, onSelection }: NameSelectorProps) {
    return (
        <Card>
            <TopContainer>
                <IconButton onClick={() => onSelection(name, 'maybe')}>
                    <Cached fontSize="large"/>
                </IconButton>
            </TopContainer>
            <NameContainer>
                <Name>{name}</Name>
            </NameContainer>
            <BottomContainer>
                <Message>Do you like this name?</Message>
                <Button variant="outlined" onClick={() => onSelection(name, 'no')}>No</Button>
                <Button variant="contained" onClick={() => onSelection(name, 'yes')}>Yes</Button>
            </BottomContainer>
        </Card>
    )
}

interface NameSelectorProps {
    name: string
    onSelection: (name: string, selection: 'yes' | 'maybe' | 'no') => void
}