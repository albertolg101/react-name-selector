import React from "react";
import styled from "styled-components";
import {createGlobalStyle} from "styled-components";
import {getRandomName} from "@/libs/names.ts";
import {IconButton, NameSelector} from "@/components";
import {NameList} from "@/components";
import {ExpandMore} from "@mui/icons-material";

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Roboto', serif;
        background-color: #F5F5F5;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const TopContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;   
    left: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

function App() {
    const [namesWhitelist, setNamesWhitelist] = React.useState<string[]>([])
    const [namesBlacklist, setNamesBlacklist] = React.useState<string[]>([])
    const [name, setName] = React.useState<string>(getRandomName(namesWhitelist, namesBlacklist))
    const [showNameList, setShowNameList] = React.useState<boolean>(false)

    function handleNameSelection(name: string, selection: 'yes' | 'maybe' | 'no') {
        if (selection === 'yes') {
            setNamesWhitelist([...namesWhitelist, name])
        } else if (selection === 'no') {
            setNamesBlacklist([...namesBlacklist, name])
        }

        setName(getRandomName(namesWhitelist, namesBlacklist))
    }

    return (
        <>
            <GlobalStyle/>
            <TopContainer>
                <IconButton onClick={() => setShowNameList(true)}>
                    <ExpandMore fontSize="large"/>
                </IconButton>
            </TopContainer>
            <NameSelector name={name} onSelection={handleNameSelection}/>
            {showNameList &&
                <NameList names={namesWhitelist} onClose={() => setShowNameList(false)}/>
            }
        </>
    )
}

export default App
