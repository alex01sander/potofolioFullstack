import ProjectCard from "../components/ProjectCard";
import alogin from "../assets/site_pessoal.png";
import geo from "../assets/geolocalizacao.png";

function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-center">
      <h2 className="text-3xl font-bold text-purple-500 drop-shadow-md">
        Projetos
      </h2>
      <p className="mt-3 text-gray-300 text-sm max-w-lg mx-auto">
        Alguns dos projetos que desenvolvi ao longo da minha jornada como
        desenvolvedor.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          title="Site Pessoal"
          image={alogin}
          description="Landing Page Pessoal"
          stack="React, TailwindCSS"
          demoLink="https://alogin.com.br/"
          githubLink="https://github.com/alex01sander/alogin"
        />
        <ProjectCard
          title="API de Gerenciamento de Usuários"
          image={geo}
          description="API RESTful para gerenciamento de usuários e operações geoespaciais"
          stack="Node.js, TypeScript, Express, MongoDB, GeoJSON, Jest e Supertest"
          demoLink="https://github.com/alex01sander/OzGeolocaliz-o"
          githubLink="https://github.com/alex01sander/OzGeolocaliz-o"
        />
      </div>
    </div>
  );
}

export default Projects;
