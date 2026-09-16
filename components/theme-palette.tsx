// Accent colours from vscode-dark-2026/base24/vscode-dark-2026.yaml.
const colours = [
    ['Red', '#ff7b72'],
    ['Orange', '#ffa657'],
    ['Yellow', '#e5ba7d'],
    ['Green', '#7ee787'],
    ['Teal', '#4ec9b0'],
    ['Blue', '#79c0ff'],
    ['Purple', '#d2a8ff'],
    ['Pink', '#f48771'],
]

export function ThemePalette() {
    return (
        <div className="flex min-h-60 flex-col justify-between gap-8 rounded-xl border border-border bg-muted/40 p-6 sm:p-8">
            <div>
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">VS Code Dark 2026</p>
                <p className="mt-2 text-2xl font-semibold tracking-tight">One palette. Your whole setup.</p>
            </div>
            <div className="flex gap-2" role="img" aria-label="Theme palette: coral red, orange, warm yellow, green, teal, blue, purple and pink">
                {colours.map(([name, colour]) => (
                    <span
                        key={name}
                        title={`${name}: ${colour}`}
                        className="h-12 min-w-0 flex-1 rounded-md border border-black/10 sm:h-14"
                        style={{ backgroundColor: colour }}
                    />
                ))}
            </div>
            <p className="text-sm text-muted-foreground">Neovim · Ghostty · Base24</p>
        </div>
    )
}
