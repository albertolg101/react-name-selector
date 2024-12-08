import {FixedBox} from "@/components/Theme/FixedBox"
import {Typography} from "@/components/Theme/Typography"

export function Logo() {
    return (
        <FixedBox $top="10px" $left="15px">
            <Typography as="h1" $size="h3" $margin="0">
                <Typography as="span" $weight="bold">N</Typography>
                Selector
            </Typography>
            <Typography as="h2" $size="h6" $weight="light" $margin="0">
                One name at a time
            </Typography>
        </FixedBox>
    )
}
