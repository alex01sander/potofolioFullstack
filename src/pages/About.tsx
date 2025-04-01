function About() {
  return (
    <div className="max-w-3xl mx-auto text-center p-6">
      <h2 className="text-4xl font-bold text-purple-400">Sobre Mim</h2>
      <p className="mt-4 text-lg text-gray-300">
        Olá! Meu nome é{" "}
        <span className="text-white font-semibold">Alex Britto</span> e sou um{" "}
        <span className="text-blue-400 font-semibold">
          Desenvolvedor Fullstack
        </span>{" "}
        em formação. Atualmente, estudo e desenvolvo projetos para aprimorar
        minhas habilidades em{" "}
        <span className="text-yellow-400 font-semibold">React</span>,{" "}
        <span className="text-green-400 font-semibold">Node.js</span> e bancos
        de dados como{" "}
        <span className="text-blue-400 font-semibold">MongoDB</span> e{" "}
        <span className="text-blue-400 font-semibold">PostgreSQL</span>.
      </p>

      <div className="mt-6">
        <h3 className="text-2xl font-semibold text-green-400">Minha Jornada</h3>
        <p className="mt-2 text-gray-300">
          Estudei{" "}
          <span className="text-white font-semibold">
            Ciencia da Computação
          </span>{" "}
          e{" "}
          <span className="text-white font-semibold">
            Análise e Desenvolvimento de Sistemas
          </span>
          , mas minha maior evolução veio com a prática, desenvolvendo projetos
          reais. Atualmente, meu foco principal é o{" "}
          <span className="text-yellow-400 font-semibold">
            desenvolvimento Fullstack
          </span>
          , utilizando{" "}
          <span className="text-yellow-400 font-semibold">React</span> e{" "}
          <span className="text-green-400 font-semibold">Node.js</span>, além de
          otimizar APIs e bancos de dados como{" "}
          <span className="text-blue-400 font-semibold">MongoDB</span> e{" "}
          <span className="text-blue-400 font-semibold">PostgreSQL</span>.
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-semibold text-yellow-400">
          Mais sobre mim
        </h3>
        <p className="mt-2 text-gray-300">
          Sou apaixonado por tecnologia e inovação. Meu objetivo é aplicar meus
          conhecimentos para criar soluções digitais eficientes, enquanto
          continuo evoluindo como desenvolvedor Fullstack.
        </p>
      </div>
    </div>
  );
}

export default About;
