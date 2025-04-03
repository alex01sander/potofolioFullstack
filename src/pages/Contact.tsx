import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import SocialButton from "../components/SocialButton";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      await fetch("https://formsubmit.co/fulanosander@gmail.com", {
        method: "POST",
        body: formData,
      });

      setSuccessMessage("✅ Sua mensagem foi enviada com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar o formulário", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-center">
      <h2 className="text-4xl font-bold text-purple-400 drop-shadow-md">
        Entre em Contato
      </h2>
      <p className="mt-3 text-lg text-gray-300">
        Preencha o formulário abaixo para falar comigo.
      </p>

      {successMessage ? (
        <div className="mt-6 text-green-400 text-lg font-semibold">
          {successMessage}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Seu Nome"
            required
            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Seu E-mail"
            required
            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <textarea
            name="message"
            placeholder="Sua Mensagem"
            required
            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>

          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_autoresponse"
            value="Recebemos sua mensagem!"
          />

          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-purple-500 text-white font-semibold hover:bg-purple-600 transition duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
          </button>
        </form>
      )}

      {/* Redes Sociais */}
      <div className="mt-8 flex justify-center space-x-6">
        <SocialButton href="https://www.instagram.com/alx_sandeer/">
          <FaInstagram size={32} />
        </SocialButton>
        <SocialButton href="https://w.app/ohlzfr">
          <FaWhatsapp size={32} />
        </SocialButton>
        <SocialButton href="https://www.linkedin.com/in/alex-sander-dev/">
          <FaLinkedin size={32} />
        </SocialButton>
      </div>
    </div>
  );
}

export default Contact;
