import { useNavigate } from "react-router-dom";
import WindowLayout from "../components/WindowLayout";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <WindowLayout
      title="Arthur Rodrigues - Portfolio"
      subtitle="Engenheiro de Software - Sistemas de Informacao"
      statusLeft="Bem-vindo"
      statusRight="Navegue pelo menu a esquerda"
    >
      <div className="home-hero">
        <h1>Arthur Rodrigues</h1>
        <p>Engenheiro de Software</p>
        <p className="muted">
          Cursando Sistemas de Informacao - Montes Claros, MG
        </p>
        <div className="button-row">
          <button className="default" onClick={() => navigate("/projects")}>
            Projetos
          </button>
          <button onClick={() => navigate("/about")}>Sobre mim</button>
          <button onClick={() => navigate("/socials")}>Contato</button>
        </div>
      </div>

      <div className="home-grid">
        <fieldset>
          <legend>Resumo</legend>
          <p>
            Atuo com desenvolvimento web, foco em Java 17 + Spring Boot e
            interfaces em React/Vue.
          </p>
          <p className="muted">
            Interesse atual: aplicacoes com LLM e produtos orientados a usuario.
          </p>
        </fieldset>

        <fieldset>
          <legend>Destaques</legend>
          <ul className="list">
            <li>Projetos publicados e produtos em producao</li>
            <li>Experiencia com Cloud (AWS, Vercel, Render)</li>
            <li>Trabalho com bancos SQL e NoSQL</li>
          </ul>
        </fieldset>

        <fieldset>
          <legend>Atalhos</legend>
          <div className="button-row">
            <button onClick={() => navigate("/mystack")}>Meu stack</button>
            <button onClick={() => navigate("/professionalxp")}>
              Experiencia
            </button>
            <button onClick={() => navigate("/projects")}>Ver projetos</button>
          </div>
        </fieldset>

        <fieldset>
          <legend>Contato</legend>
          <p>Email: arthurdk01@gmail.com</p>
          <p className="muted">
            LinkedIn e GitHub estao na secao Redes sociais.
          </p>
        </fieldset>
      </div>
    </WindowLayout>
  );
};

export default HomePage;
