export default function Mobile() {
    
    // "xs" = extra-small, sm = small, md = medium, lg = large, xl = extra-large, 2xl = 2-extra-large   
    return (
        <div className="
        flex justify-center items-center
        bg-red-500 h-48
        text-3xl md:text-4xl lg:text-6xl
        w-[90%] 2xl:w-[70%]
        
        ">
            <span className="inline sm:hidden">Mobile</span>
            <span className="hidden sm:inline">Não mobile</span>
        </div>
    )
}