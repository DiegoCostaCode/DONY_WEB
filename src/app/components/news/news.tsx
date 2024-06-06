import { useEffect, useState } from "react";

interface Item {
    id_entidade: number;
    nome_material: string;
    decomposicao: number;
    descricao_material: string;
}

export default function News() {
  const [data, setData] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/material").then((response)=>{
        return response.json()
        }).then((dataJson)=>{
            setData(dataJson)
        })
    },[])

  return (
    <>
      <div className="flex mx-[25px] justify-center items-center">
        {data.map((item : Item) => {
          return (
            <div key={item.id_entidade} className="bg-white text-black my-[25px] w-[500px] h-[500px] p-[20px] rounded-xl">
              <h1 className="text-h1 font-bold">{item.nome_material}</h1>
              <h2 className="text-h2">{item.decomposicao}</h2>
              <p>{item.descricao_material}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
