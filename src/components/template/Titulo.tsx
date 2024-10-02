interface TituloProps {
    principal: string
    secundario: string
    gradiente?: boolean
}

export default function Titulo(props: TituloProps) {
    return (
        <div className="flex flex-col items-start">
            <h1 className={`
                text-4xl font-black
                ${props.gradiente ? 'bg-gradient-to-r from-teal-400 to-lime-400 bg-clip-text text-transparent' : ''}
            `}>
                {props.principal}
            </h1>
            <h2 className="text-base text-zinc-600">{props.secundario}</h2>
        </div>
    )
}