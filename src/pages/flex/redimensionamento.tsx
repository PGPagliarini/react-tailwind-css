import Caixa from "@/components/Caixa";

export default function Redimensionamento() {
    return (
        <div className="flex gap-1.5">
            <Caixa className="w-14 grow-0">#1</Caixa>
            <Caixa className="w-32 flex-1">#2</Caixa>
            <Caixa className="w-64 shrink">#3</Caixa>
        </div>
    )
}