import WindowLayout from "../components/WindowLayout";

const projects = [
  {
    name: "Open Source Atlas",
    stack: "Next.js, NestJS, Prisma ORM, MongoDB",
    summary:
      "Full-stack web project with frontend built in Next.js (React), Tailwind, and ShadCN.",
    infra:
      "Backend with Node.js + NestJS, class-validator, Swagger, Pino logs, Better Auth with Google, MinIO, VPS on Coolify, GA/GSC, and Jest tests.",
    url: "https://opensourceatlas.com",
  },
  {
    name: "Cedro Modern Dock",
    url: "https://github.com/arthurdeka/cedro-modern-dock",
    stack: "Java, JavaFX",
    summary:
      "Desktop app for Windows program management with more than 3,500 downloads and 300 GitHub stars.",
  },
];

const ProjectsPageEn: React.FC = () => {
  return (
    <WindowLayout
      title="Projects"
      subtitle="Selected personal projects"
      statusLeft="Projects"
      locale="en"
      basePath="/en"
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
                  Open
                </a>
              </div>
            ) : null}
          </fieldset>
        ))}
      </div>
    </WindowLayout>
  );
};

export default ProjectsPageEn;
