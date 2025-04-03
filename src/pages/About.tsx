import { motion } from "framer-motion";
import setup from "../assets/setup.png";

function About() {
  return (
    <div className="max-w-3xl mx-auto text-center p-6 mt-8 my-20">
      <h2 className="text-4xl font-bold text-purple-400">Sobre Mim</h2>

      {/* Flexbox para alinhar a imagem e o texto */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-6 gap-6">
        {/* Texto */}
        <div className="text-left max-w-xl">
          <p className="mt-4 text-lg text-gray-300">
            Meu nome é{" "}
            <span className="text-white font-semibold">Alex Britto</span> e sou
            um{" "}
            <span className="text-blue-400 font-semibold">
              Desenvolvedor Fullstack
            </span>{" "}
            em formação. Atualmente, estudo e desenvolvo projetos para aprimorar
            minhas habilidades em{" "}
            <span className="text-yellow-400 font-semibold">React</span>,{" "}
            <span className="text-green-400 font-semibold">Node.js</span> e
            bancos de dados como{" "}
            <span className="text-blue-400 font-semibold">MongoDB</span> e{" "}
            <span className="text-blue-400 font-semibold">PostgreSQL</span>.
          </p>

          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-green-400">
              Minha Jornada
            </h3>
            <p className="mt-2 text-gray-300">
              Estudei{" "}
              <span className="text-white font-semibold">
                Ciência da Computação
              </span>{" "}
              e{" "}
              <span className="text-white font-semibold">
                Análise e Desenvolvimento de Sistemas
              </span>
              , mas minha maior evolução veio com a prática, desenvolvendo
              projetos reais. Atualmente, meu foco principal é o{" "}
              <span className="text-yellow-400 font-semibold">
                desenvolvimento Fullstack
              </span>
              , utilizando{" "}
              <span className="text-yellow-400 font-semibold">React</span> e{" "}
              <span className="text-green-400 font-semibold">Node.js</span>,
              além de otimizar APIs e bancos de dados como{" "}
              <span className="text-blue-400 font-semibold">MongoDB</span> e{" "}
              <span className="text-blue-400 font-semibold">PostgreSQL</span>.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-yellow-400">
              Mais sobre mim
            </h3>
            <p className="mt-2 text-gray-300">
              Sou apaixonado por tecnologia e inovação. Meu objetivo é aplicar
              meus conhecimentos para criar soluções digitais eficientes,
              enquanto continuo evoluindo como desenvolvedor Fullstack.
            </p>
          </div>
        </div>

        {/* Imagem com animação ao rolar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src={setup} alt="Setup de trabalho" className="w-400 h-150 " />
        </motion.div>
      </div>
    </div>
  );
}

export default About;
