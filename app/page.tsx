export default async function HomePage() {
    return (
        <div className="bg-background relative">
            <div className="p-6 border-b border-border flex flex-col gap-6 min-h-[250px] justify-center relative z-10">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="flex flex-col gap-2">
                        <h1 className="font-medium text-4xl md:text-5xl tracking-tighter">
                            Magic UI Blog
                        </h1>
                        <p className="text-muted-foreground text-sm md:text-base lg:text-lg">
                            Latest news and updates from Magic UI.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
