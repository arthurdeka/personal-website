import WindowLayout from "../components/WindowLayout";

const projects = [
  {
    name: "Open Source Atlas",
    stack: "Next.js, NestJS, Prisma ORM, MongoDB",
    summary: "Projeto web full-stack com frontend em Next.js (React), Tailwind e ShadCN.",
    infra:
      "Backend com Node.js + NestJS, class-validator, Swagger, logs com Pino, Better Auth com Google, MinIO, Coolify em VPS, GA/GSC e testes com Jest.",
    url: "https://opensourceatlas.com",
  },
  {
    name: "Cedro Modern Dock",
    url: "https://github.com/arthurdeka/cedro-modern-dock",
    stack: "Java, JavaFX",
    summary:
      "Aplicação desktop para gerenciamento de programas no Windows com mais de 3.500 downloads e 300 estrelas no GitHub.",
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <WindowLayout
      title="Projetos"
      subtitle="Seleção de projetos pessoais"
      statusLeft="Projetos"
    >
      <div className="project-list">
        {projects.map((project) => (
          <fieldset key={project.name} className="project-card">
            <legend>{project.name}</legend>
            <p>{project.summary}</p>
            <div className="project-meta">
              <div>Stack: {project.stack}</div>
              {project.infra ? <div>Infra: {project.infra}</div> : null}
            </div>
            {project.url ? (
              <div className="button-row">
                <a
                  className="button-link"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Abrir
                </a>
              </div>
            ) : null}
          </fieldset>
        ))}
      </div>
    </WindowLayout>
  );
};

export default ProjectsPage;
