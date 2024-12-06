export function NameList({ names }: { names: string[] }) {
    return (
        <ul>
            {names.map((name, index) => (
                <li key={index}>{name}</li>
            ))}
        </ul>
    )
}