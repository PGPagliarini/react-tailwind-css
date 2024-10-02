import { useState } from "react"
import Logo from "./Logo"
import Menu from "./Menu"
import UsuarioInfo from "./UsuarioInfo"
import { IconLighter, IconMoon, IconPrismLight, IconSun } from "@tabler/icons-react"

interface PaginaProps {
    children: any
}


export default function Pagina(props: PaginaProps) {
    const [tema, setTema] = useState<'dark' | ''>('dark')

    function alternarTema() {
        tema === 'dark' ? setTema('') : setTema('dark')
    }

    const usuario = {
        nome: 'Mike Sullivan',
        email: 'mikesullivan@gpcode.com',
        imagemUrl: 'https://img.freepik.com/fotos-premium/um-monstro-de-desenho-animado_62972-759.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1717977600&semt=ais_user'
    }

    return (
        <div className={`flex h-screen relative ${tema}`}>
            <aside className="
            flex flex-col 
            bg-white dark:bg-zinc-900
            text-black dark:text-white
            w-80
            ">
                <Logo className="pt-7 px-7" />
                <Menu className="pt-3.5 px-7 pb-32 overflow-auto"/>
                <div className="fixed bottom-0 bg-white dark:bg-zinc-900 w-80">
                    <hr className="mx-7 border-zinc-400 dark:border-zinc-700" />
                    <UsuarioInfo {...usuario} className="p-7"/>
                </div>
            </aside>
            <div className={`
            p-7 flex-1 bg-zinc-100 dark:bg-black
            text-black dark:text-white

            `}>
                {props.children}
            </div>
            <div className="absolute right-4 top-4">
                <button className="text-black dark:text-white" onClick={alternarTema}>
                    {tema === 'dark' ? <IconSun className="text-white" /> : <IconMoon className="text-black" />}
                </button>
            </div>
        </div>
    )
}