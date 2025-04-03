interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  stack: string;
  demoLink: string;
  githubLink: string;
}

function ProjectCard({
  title,
  image,
  description,
  stack,
  demoLink,
  githubLink,
}: ProjectCardProps) {
  return (
    <div className="bg-stone-800 p-5 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
      <h3 className="text-lg font-medium text-white">{title}</h3>
      <img
        src={image}
        alt={`Imagem do projeto ${title}`}
        className="w-full h-56 object-cover rounded-lg mt-3 shadow-md"
      />
      <p className="text-gray-400 mt-2 text-sm">{description}</p>
      <p className="text-gray-400 text-xs">{stack}</p>
      <div className="mt-3 flex justify-center gap-3">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-md border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition-all text-sm"
        >
          Demo
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-md border border-white hover:bg-white hover:text-black transition-all text-sm"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
