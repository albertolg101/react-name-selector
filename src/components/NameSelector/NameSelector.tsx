export function NameSelector({ name, onSelection }: NameSelectorProps) {
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={() => onSelection(name, 'yes')}>Yes</button>
            <button onClick={() => onSelection(name, 'maybe')}>Maybe</button>
            <button onClick={() => onSelection(name, 'no')}>No</button>
        </div>
    )
}

interface NameSelectorProps {
    name: string
    onSelection: (name: string, selection: 'yes' | 'maybe' | 'no') => void
}