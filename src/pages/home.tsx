import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import perfil from "../assets/perfil.jpeg";
import cv from "../assets/Alex_fullstack.pdf";

function Home() {
  const roles = ["Frontend", "Backend", "FullStack"];
  const [currentText, setCurrentText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const role = roles[currentRoleIndex];

    if (!isDeleting && charIndex < role.length) {
      // Digitando
      setTimeout(() => {
        setCurrentText(role.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 100);
    } else if (isDeleting && charIndex > 0) {
      // Apagando
      setTimeout(() => {
        setCurrentText(role.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else if (charIndex === role.length && !isDeleting) {
      // Espera um tempo antes de apagar
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (charIndex === 0 && isDeleting) {
      // Passa para a próxima palavra
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }
  }, [charIndex, isDeleting, currentRoleIndex]);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center text-white py-16 px-6 md:px-20 mt-20 font-sans antialiased">
      <motion.div
        className="flex flex-col items-start max-w-lg md:order-2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-5xl font-extrabold">
          Olá, seja bem-vindo! Eu sou
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-green-500 mt-2">
          Alex Britto
        </h2>
        <p className="text-lg md:text-xl mt-4 text-gray-300">
          Desenvolvedor{" "}
          <motion.span
            className="text-blue-400 font-medium"
            key={currentText}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {currentText}
            <span className="text-white">|</span> {/* Cursor piscando */}
          </motion.span>
        </p>
        <div className="flex flex-wrap gap-4 mt-6">
          <a
            href="https://www.linkedin.com/in/alex-sander-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 border-2 border-white rounded-full hover:bg-white hover:text-black transition duration-300 shadow-lg"
          >
            <FaLinkedin className="text-xl" />
            LinkedIn
          </a>
          <a
            href="https://github.com/alex01sander"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 border-2 border-white rounded-full hover:bg-white hover:text-black transition duration-300 shadow-lg"
          >
            <FaGithub className="text-xl" />
            GitHub
          </a>
          <a
            href={cv} // Substitua pelo caminho real do seu currículo
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 border-2 border-white rounded-full hover:bg-white hover:text-black transition duration-300 shadow-lg"
            download="alex_britto_curriculo.pdf" // Nome que será usado ao baixar
          >
            <FaFileDownload className="text-xl" />
            CV
          </a>
        </div>
      </motion.div>

      <motion.div
        className="mt-8 md:mt-0 md:mr-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={perfil}
          alt="Alex Britto Ilustração"
          className="w-80 md:w-96 rounded-xl shadow-2xl"
        />
      </motion.div>
    </section>
  );
}

export default Home;
