import WindowLayout from "../components/WindowLayout";

const projects = [
  {
    name: "The Open Source Repository",
    url: "https://theopensourcerepository.vercel.app",
    stack: "Vue, TypeScript, Spring Boot, MariaDB",
    summary: "Projeto-portfolio de repositorio de aplicacoes open-source.",
    infra: "Hospedado em EC2 AWS e redirecionado por DuckDNS.",
    year: "2025",
  },
  {
    name: "MCP Servers Hub",
    url: "https://www.mcpservershub.tech",
    stack: "React, TypeScript (front-end)",
    summary: "Em construcao.",
    year: "2025",
  },
  {
    name: "CustomTkBuilder",
    url: "https://customtkbuilder.com",
    stack: "React, TypeScript",
    summary: "Construtor de interfaces com 1.000 usuarios mensais em 80 paises.",
    year: "2024",
  },
  {
    name: "ColorfulGPT",
    url: "https://chromewebstore.google.com/detail/colorfulgpt/gllpahblfeolhjjdpiljniklgdpkhdne",
    stack: "JavaScript",
    summary: "Extensao de navegador publicada na Chrome Web Store.",
    year: "2024",
  },
  {
    name: "Toolkit do Pesquisador",
    url: "https://congresso2023.unimontes.br/anais/391b6341-3b7a-4622-a377-ab88e5380f67",
    stack: "React, JavaScript, Python Flask",
    summary:
      "Premio de segundo melhor trabalho da area de exatas no Congresso Internacional da Unimontes.",
    year: "2023",
  },
  {
    name: "CustomTkinter Templates",
    url: "https://github.com/arthurdeka/CustomTkinter-Templates",
    stack: "Python, CustomTkinter, UV Package Manager",
    summary: "Repositorio com 100 estrelas no GitHub.",
    year: "2022",
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <WindowLayout
      title="Projetos"
      subtitle="Selecao de trabalhos e produtos"
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
              <div>Ano: {project.year}</div>
            </div>
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
          </fieldset>
        ))}
      </div>
    </WindowLayout>
  );
};

export default ProjectsPage;
