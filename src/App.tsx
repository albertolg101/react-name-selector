import React from "react";
import {ThemeProvider} from "styled-components";
import {CustomTheme} from "@/libs/CustomTheme";
import {GlobalStyle} from "@/libs/CustomTheme";
import {Box} from "@/components/Theme";
import {FlexBox} from "@/components/Theme";
import {IconButton} from "@/components/Theme";
import {Typography} from "@/components/Theme";
import {Logo} from "@/components";
import {getRandomName} from "@/libs/names";
import {NameSelector} from "@/components";
import {NamesList} from "@/components";

function App() {
    const [namesWhitelist, setNamesWhitelist] = React.useState<string[]>([])
    const [namesBlacklist, setNamesBlacklist] = React.useState<string[]>([])
    const [showNamesList, setShowNamesList] = React.useState<boolean>(false)
    const [name, setName] = React.useState<string | null>(getRandomName())

    function handleNameSelection(name: string, selection: 'yes' | 'maybe' | 'no') {
        if (selection === 'yes') {
            setNamesWhitelist([...namesWhitelist, name])
        } else if (selection === 'no') {
            setNamesBlacklist([...namesBlacklist, name])
        }

        setName(getRandomName([...namesWhitelist, ...namesBlacklist, name]))
    }

    return (
        <ThemeProvider theme={CustomTheme}>
            <GlobalStyle/>
            <Logo />
            <FlexBox $flexGrow $centered>
                {name !== null ? (
                    <NameSelector name={name} onSelection={handleNameSelection}/>
                ) : (
                    <Box>
                        <Typography as="h3" $weight="bold">There are no more names available</Typography>
                        <Typography as="h4" $size="p">
                            {"but you can see "}
                            <Typography as="span" $size="p" $weight="bold" $underlinedOnHover>
                                <IconButton onClick={() => setShowNamesList(true)}>
                                    the ones that you liked.
                                </IconButton>
                            </Typography>
                        </Typography>
                    </Box>
                )}
            </FlexBox>
            <NamesList
                names={namesWhitelist}
                isOpen={showNamesList}
                onOpen={() => setShowNamesList(true)}
                onClose={() => setShowNamesList(false)}
            />
        </ThemeProvider>
    )
}

export default App
