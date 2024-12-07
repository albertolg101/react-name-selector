import React from "react";
import styled, {createGlobalStyle} from "styled-components";
import {CenteredContentBox, Logo} from "@/components";
import {getRandomName} from "@/libs/names.ts";
import {NameSelector} from "@/components";
import {NamesList} from "@/components";

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Roboto', serif;
        background-color: #F5F5F5;
        margin: 0;
    }
    
    #root {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const Message = styled.div`
    user-select: none;
`

const H3 = styled.h3`
    font-family: "Roboto", serif;
    font-size: 2rem;
    margin: 1rem 0;
`

const H4 = styled.h4`
    font-family: "Roboto", serif;
    font-size: 1rem;
    font-weight: 400;
`

const U = styled.u`
    cursor: pointer;
    color: #2C302E;
    font-weight: 500;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`

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
        <>
            <GlobalStyle/>
            <Logo />
            <CenteredContentBox flexGrow>
                {name !== null ? (
                    <NameSelector name={name} onSelection={handleNameSelection}/>
                ) : (
                    <Message>
                        <H3>There are no more names available</H3>
                        <H4>But you can see <U onClick={() => setShowNamesList(true)}>the ones that you liked.</U></H4>
                    </Message>
                )}
            </CenteredContentBox>
            <NamesList
                names={namesWhitelist}
                isOpen={showNamesList}
                onOpen={() => setShowNamesList(true)}
                onClose={() => setShowNamesList(false)}
            />
        </>
    )
}

export default App
