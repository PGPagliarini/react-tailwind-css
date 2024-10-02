interface MenuGrupoProps {
    texto: string
}

export default function MenuGrupo(props: MenuGrupoProps) {
    return(
        <div className="
        text-zinc-700 dark:text-zinc-400 
        text-xs uppercase 
        font-bold pt-3.5">
            {props.texto}
        </div>
    )
}