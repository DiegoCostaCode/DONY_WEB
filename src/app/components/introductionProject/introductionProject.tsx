export default function Intro() {
  return (
    <section className="h-screen flex flex-col justify-center items-center  p-[25px] relative">
      <div className="flex flex-col items-center justify-center">
        <p className="text-h3 font-medium tracking-[1rem]">
          Bem-vindo ao projeto
        </p>
        <img src="img/savedony.svg" className="w-[800px] p-[10px]" />
        <p className="text-xl text-center p-[10px] max-w-[62.5rem]">
          Este é um projeto de concientização, cujo o objetivo é entregar
          informação e promover a preservação dos oceanos e consequentemente a
          vida marinha. Criado em 2024 por estudantes da FIAP.
          <br />
          <br />
          Dony vem de Donatello, referênciando a popular tartaturaga de
          Tartatugas Ninja. Espécie tão utilizada para representar o movimento
          de prevenção a poluição marinha.
        </p>
      </div>
    </section>
  );
}
