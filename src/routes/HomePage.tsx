import WindowLayout from "../components/WindowLayout";

const HomePage: React.FC = () => {
  return (
    <WindowLayout
      title="Arthur Rodrigues - Portfolio"
      subtitle="Desenvolvedor Full-Stack | TypeScript, React, NestJS, Next.js"
      statusLeft="Bem-vindo"
      statusRight="Navegue pelo menu a esquerda"
    >
      <div className="home-hero">
        <div className="home-hero-content">
          <h1>Arthur Rodrigues</h1>
          <p>Desenvolvedor Full-Stack</p>
          <p className="muted">Montes Claros, MG - Brasil</p>
        </div>
        <img
          className="home-photo"
          src="/foto-pessoal.jpg"
          alt="Foto pessoal de Arthur Rodrigues"
          width={64}
          height={64}
          loading="eager"
        />
        {/*         <div className="button-row">
          <button className="default" onClick={() => navigate("/projects")}>
            Projetos
          </button>
          <button onClick={() => navigate("/about")}>Sobre mim</button>
          <button onClick={() => navigate("/socials")}>Contato</button>
        </div> */}
      </div>

      <div className="home-grid">
        <fieldset>
          <legend>Resumo</legend>
          <p>
            Atuo no ecossistema TypeScript com foco em desenvolvimento
            full-stack, integrações de APIs de pagamento e apps mobile.
          </p>
          <p className="muted">
            Vejo programação como uma arte capaz de dar vida a ideias.
          </p>
        </fieldset>

        <fieldset>
          <legend>Destaques</legend>
          <ul className="list">
            <li>Desenvolvedor Full-Stack na B91 Pagamentos desde Jul 2025</li>
            <li>Experiência com Next.js, NestJS, React Native e Expo</li>
            <li>Gestão de MongoDB e MySQL com Prisma ORM</li>
          </ul>
        </fieldset>

        {/*         <fieldset>
          <legend>Atalhos</legend>
          <div className="button-row">
            <button onClick={() => navigate("/mystack")}>Meu stack</button>
            <button onClick={() => navigate("/professionalxp")}>
              Experiencia
            </button>
            <button onClick={() => navigate("/projects")}>Ver projetos</button>
          </div>
        </fieldset> */}

        <fieldset>
          <legend>Contato</legend>
          <p>Email: arthurdk01@gmail.com</p>
          <p className="muted">
            LinkedIn: &nbsp;
            <a
              href="https://www.linkedin.com/in/arthur-wa-rodrigues/"
              target="_blank"
              rel="noreferrer"
              className="external-link"
            >
              linkedin.com/in/arthur-wa-rodrigues/
            </a>
          </p>
        </fieldset>
      </div>
    </WindowLayout>
  );
};

export default HomePage;
