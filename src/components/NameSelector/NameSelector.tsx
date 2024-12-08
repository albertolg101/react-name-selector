import styled from 'styled-components';
import {Cached} from "@mui/icons-material";
import {Box} from "@/components/Theme";
import {Button} from "@/components/Theme";
import {Typography} from "@/components/Theme";
import {FlexBox} from "@/components/Theme";
import {IconButton} from "@/components/Theme";

const Card = styled.div`
    display: flex;
    flex-direction: column;
    height: 510px;
    width: 340px;
    padding: 20px;
    border-radius: 20px;
    background-color: #FFFFFF;
    box-shadow: -4px -3px 45px 21px rgba(0, 0, 0, 0.10);
`

interface NameSelectorProps {
    name: string
    onSelection: (name: string, selection: 'yes' | 'maybe' | 'no') => void
}

export function NameSelector({ name, onSelection }: NameSelectorProps) {
    return (
        <Card>
            <Box>
                <IconButton onClick={() => onSelection(name, 'maybe')}>
                    <Cached fontSize="large"/>
                </IconButton>
            </Box>
            <FlexBox $flexGrow $centered>
                <Typography as={'p'} $size={'h1'} $weight={'medium'}>
                    {name}
                </Typography>
            </FlexBox>
            <FlexBox $direction="row" $gap="10px">
                <Typography as="span" $size="h6" $margin="0 0.5rem">Do you like this name?</Typography>
                <Button $variant="outlined" onClick={() => onSelection(name, 'no')}>No</Button>
                <Button $variant="contained" onClick={() => onSelection(name, 'yes')}>Yes</Button>
            </FlexBox>
        </Card>
    )
}