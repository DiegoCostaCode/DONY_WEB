import { useEffect, useState } from "react";

interface Item {
    id_entidade: number
    conteudo: string
    data_publicacao: string
    fonte_noticia: string
    thumbnail_noticia: string
    titulo_noticia: string
}

export default function LatestsNews() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/noticia").then((response) => {
            return response.json()
        }).then((dataJson) => {
            setData(dataJson)
        })
    }, [])

    return (
        <>
            <div className="flex flex-col overflow-x-auto justify-center m-[80px] ">

                <h1 className="text-[50px] font-bold p-[20px]">Noticias</h1>

                <div className="flex w-full space-x-[50px] p-[50px]">
                    {data.map((item: Item) => {
                        return (
                            <div key={item.id_entidade} className="flex justify-center items-center h-[800px] bg-white text-black rounded-2xl ">
                                <div className="flex flex-col items-center p-[50px]">
                                    <div className="flex flex-col items-center space-y-[15px] ">
                                        <div >
                                            <img src={item.thumbnail_noticia} className="max-w-[450px] rounded-xl" />
                                        </div>

                                        <div className="flex flex-col items-start">
                                            <h1 className="text-h3 w-[450px] text-justify">{item.titulo_noticia}</h1>
                                            <p className="text-sm ">{item.data_publicacao}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="p-[20px]">
                                            <p className="text-base text-justify w-[450px]">{item.conteudo} <br /> </p>
                                            <a href={item.fonte_noticia} className=" font-bold">Leia mais...</a>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>



            </div>
        </>
    );
}