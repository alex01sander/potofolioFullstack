import { FaGithub, FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center text-white py-16 px-6 md:px-20 bg-black mt-20 font-sans antialiased">
      <div className="flex flex-col items-start max-w-lg">
        <h1 className="text-3xl md:text-5xl font-bold">
          Olá, Seja Bem-Vindo, eu sou
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-green-500 mt-2">
          Alex Britto <span className="text-white">|</span>
        </h2>
        <p className="text-lg md:text-xl mt-4">Desenvolvedor FullStack</p>
        <div className="flex gap-4 mt-6">
          <a
            href="https://www.linkedin.com/in/alex-sander-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition"
          >
            <FaLinkedin />
            LinkedIn
          </a>
          <a
            href="https://github.com/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition"
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </div>
      <div className="mt-8 md:mt-0 md:ml-12">
        <img
          src="/images/profile-illustration.png"
          alt="Alex Britto Ilustração"
          className="w-80 md:w-96"
        />
      </div>
    </section>
  );
}

export default Home;
