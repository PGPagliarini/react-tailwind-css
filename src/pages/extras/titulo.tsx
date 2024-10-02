import Titulo from "@/components/template/Titulo";

export default function PaginaTitulo() {
    return (
        <div className="p-10">
            <Titulo
                principal="Dashboard"
                secundario="Informações sobre a sua conta"
                gradiente
            >

            </Titulo>
        </div>
    )
}