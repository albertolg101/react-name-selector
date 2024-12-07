import React from "react";
import {createGlobalStyle} from "styled-components";
import {getRandomName} from "@/libs/names.ts";
import {NameSelector} from "@/components";

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

function App() {
    const [namesWhitelist, setNamesWhitelist] = React.useState<string[]>([])
    const [namesBlacklist, setNamesBlacklist] = React.useState<string[]>([])
    const [name, setName] = React.useState<string>(getRandomName(namesWhitelist, namesBlacklist))

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
            <NameSelector name={name} onSelection={handleNameSelection}/>
            {/*<hr/>*/}
            {/*<NameList names={namesWhitelist}/>*/}
        </>
    )
}

export default App
