export default function Footer()
{
    return(
        <>
        <footer className="flex bg-[#070707] h-[200px] justify-center items-center">
            <div className="flex flex-1 flex-col items-center  ">
                <img src="/img/logo2.svg" className="w-[180px]" />
                <p className="text-white text-sm">--Projeto em desenvolvimento--</p>
                <a href="https://github.com/DiegoCostaCode/DONY_WEB" className="text-white">Github</a>
            </div>
            <div className="flex flex-1 flex-col text-white justify-center items-center">
                <h1 className="text-h3 font-bold">Integrantes</h1>
                <p>Diego Costa Silva - RM552648 - Frontend, Java e Banco</p>
                <p>Lucas Minozzo Bronzeri - RM553745 - Python dev </p>
                <p>Marcelo Mendes Galli - RM552648 - Software Design</p>
            </div>
        </footer>
        
        </>
    )
}