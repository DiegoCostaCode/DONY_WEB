import { useEffect, useState } from "react";

interface Item {
  id_entidade: number;
  nome_material: string;
  decomposicao: number;
  descricao_material: string;
  thumbnail: string;
}

export default function Materials() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/material").then((response) => {
      return response.json()
    }).then((dataJson) => {
      setData(dataJson)
    })
  }, [])

  return (
    <>
      <div className="flex flex-col items-center space-y-[100px] m-[80px] ">

        <h1 className="text-[50px] font-bold">Recicle e ganhe pontos!</h1>
        <p className="text-h3">O nosso projeto possibilita que você cadastre produtos que irá reciclar. Você ganha, o meio ambiente ganha.</p>

        <div className="flex flex-col overflow-x-auto space-y-[50px]">
          {data.map((item: Item) => {
            return (
              <div key={item.id_entidade} className="flex flex-col justify-center items-center w-[140vh] bg-white text-black p-[35px] rounded-2xl ">
                <div className="flex items-center">
                  <div >
                    <img src={item.thumbnail} className="max-w-[350px] rounded-xl" />
                  </div>
                  <div>
                    <div className="flex flex-col items-center">
                      <h1 className="text-h2 ">{item.nome_material}</h1>
                      <h2 className="text-h1 font-bold">{item.decomposicao} anos</h2>
                    </div>

                    <div className="p-[20px]">
                      <p className="text-base text-justify">{item.descricao_material}</p>
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
