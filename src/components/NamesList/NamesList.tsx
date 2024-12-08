import {Modal} from "@/components";
import {ExpandMore} from "@/components/AnimatedIcons";
import {FixedBox} from "@/components/Theme";
import {FlexBox} from "@/components/Theme";
import {IconButton} from "@/components/Theme";
import {ListItem} from "@/components/Theme";
import {Typography} from "@/components/Theme";

export function NamesList({names, isOpen, onOpen, onClose}: NameListProps) {

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <Typography as="h3" $weight="medium">Liked Names:</Typography>
                <FlexBox as="ol" $direction="column" $gap="10px" $flexWrap $overflow="scroll">
                    {names.sort().map((name) => (
                        <ListItem key={name}>
                            <Typography as="p" $size="h5">
                                {name}
                            </Typography>
                        </ListItem>
                    ))}
                </FlexBox>
            </Modal>
            <FixedBox $top="0" $left="50%" $transform="translateX(-50%)" $padding="20px">
                <FlexBox>
                    <IconButton onClick={onOpen}>
                        <Typography as="h3" $size="subtitle1" $margin="0">Liked Names</Typography>
                        <ExpandMore/>
                    </IconButton>
                </FlexBox>
            </FixedBox>
        </>
    )
}

export interface NameListProps {
    names: string[]
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}