function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-lg font-semibold">
          Alex Britto © {new Date().getFullYear()}
        </p>
        <p className="mt-2 text-sm">Desenvolvedor Fullstack</p>

        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://github.com/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:seuemail@email.com"
            className="hover:text-white transition duration-300"
          >
            Contato
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
