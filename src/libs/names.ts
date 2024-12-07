export const NAMES: string[] = [
    "Sophia", "Jackson", "Olivia", "Liam", "Emma",
    "Noah", "Ava", "Lucas", "Isabella", "Oliver",
    "Mia", "Ethan", "Amelia", "Aiden", "Harper",
    "Elijah", "Evelyn", "James", "Charlotte", "Benjamin",
    "Abigail", "William", "Emily", "Alexander", "Madison",
    "Michael", "Elizabeth", "Mason", "Sofia", "Logan",
    "Avery", "Matthew", "Ella", "Daniel", "Scarlett",
    "Henry", "Grace", "Joseph", "Lily", "Samuel",
    "Chloe", "David", "Victoria", "Carter", "Riley",
    "Wyatt", "Aria", "Jayden", "Zoey", "Gabriel"
]

export function getRandomName(blacklist?: string[]): string | null {
    blacklist = blacklist || []
    const validNames = NAMES.filter((name: string) => !blacklist.includes(name))

    if (validNames.length === 0) {
        return null
    }

    const index = Math.floor(Math.random() * validNames.length)
    return validNames[index]
}