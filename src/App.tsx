import React from 'react';
import {NameList, NameSelector} from "./components";
import {getRandomName} from './libs/names';

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
        <div>
            <NameSelector name={name} onSelection={handleNameSelection}/>
            <hr />
            <NameList names={namesWhitelist} />
        </div>
    )
}

export default App
