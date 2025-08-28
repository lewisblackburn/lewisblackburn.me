export interface Author {
    name: string
    position: string
    avatar: string
}

export const authors: Record<string, Author> = {
    lewis: {
        name: 'Lewis Blackburn',
        position: 'Freelance Web Developer',
        avatar: '/authors/lewis.png',
    },
} as const

export type AuthorKey = keyof typeof authors

export function getAuthor(key: AuthorKey): Author {
    return authors[key]
}

export function isValidAuthor(key: string): key is AuthorKey {
    return key in authors
}
