import geo from "../assets/geolocalizacao.png";
import gemini from "../assets/gemini.png";
import stockly from "../assets/stockly.png";

function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 text-center">
      <h2 className="text-4xl font-bold text-purple-500 drop-shadow-md mb-4">
        Projetos
      </h2>
      <p className="mt-3 text-gray-300 text-base max-w-2xl mx-auto mb-12">
        Alguns dos projetos que desenvolvi ao longo da minha jornada como
        desenvolvedor.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Projeto 2 */}
        <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full">
          <div className="p-5">
            <h3 className="text-xl font-semibold text-white mb-3">
              API de Gerenciamento de Usuários
            </h3>
          </div>

          <div className="w-full px-4">
            <img
              src={geo}
              alt="Imagem da API de Geolocalização"
              className="w-full h-64 object-contain rounded-lg shadow-md"
            />
          </div>

          <div className="p-5 flex-grow flex flex-col">
            <p className="text-gray-300 mt-3 text-sm">
              API RESTful para gerenciamento de usuários e operações
              geoespaciais
            </p>
            <p className="text-purple-400 text-xs mt-1">
              Stack: Node.js, TypeScript, Express, MongoDB, GeoJSON, Jest e
              Supertest
            </p>

            <div className="mt-auto pt-5 flex justify-center">
              <a
                href="https://github.com/alex01sander/OzGeolocaliz-o"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full border border-white text-white hover:bg-white hover:text-stone-900 transition-all text-sm font-medium shadow-md hover:shadow-lg"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Projeto 3 */}
        <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full">
          <div className="p-5">
            <h3 className="text-xl font-semibold text-white mb-3">
              Instabytes API – Upload e Descrição Automática
            </h3>
          </div>

          <div className="w-full px-4">
            <img
              src={gemini}
              alt="Imagem do Projeto Instabytes"
              className="w-full h-64 object-contain rounded-lg shadow-md"
            />
          </div>

          <div className="p-5 flex-grow flex flex-col">
            <p className="text-gray-300 mt-3 text-sm">
              API RESTful que permite o upload de imagens, gera descrições
              automáticas usando a IA do Google Gemini e armazena os dados no
              MongoDB.
            </p>
            <p className="text-purple-400 text-xs mt-1">
              Stack: Node.js, Express.js, MongoDB, Google Generative AI
              (Gemini), Google Cloud Run, Cloud Build.
            </p>

            <div className="mt-auto pt-5 flex justify-center">
              <a
                href="https://github.com/alex01sander/imersao-instaBack"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full border border-white text-white hover:bg-white hover:text-stone-900 transition-all text-sm font-medium shadow-md hover:shadow-lg"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Projeto 4 */}
        <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full">
          <div className="p-5">
            <h3 className="text-xl font-semibold text-white mb-3">
              Stockly - Sistema de Gerenciamento de Estoque
            </h3>
          </div>

          <div className="w-full px-4">
            <img
              src={stockly}
              alt="Imagem do Stockly Dashboard"
              className="w-full h-64 object-contain rounded-lg shadow-md"
            />
          </div>

          <div className="p-5 flex-grow flex flex-col">
            <p className="text-gray-300 mt-3 text-sm">
              Sistema completo de gerenciamento de estoque com dashboard
              interativo, controle de produtos, vendas e relatórios em tempo
              real.
            </p>
            <p className="text-purple-400 text-xs mt-1">
              Stack: Next.js, TypeScript, Prisma, PostgreSQL, Tailwind CSS,
              Radix UI, shadcn/ui, Zod, Jest, Swagger
            </p>

            <div className="mt-auto pt-5 flex justify-center">
              <a
                href="https://github.com/alex01sander/Stockly"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full border border-white text-white hover:bg-white hover:text-stone-900 transition-all text-sm font-medium shadow-md hover:shadow-lg"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
