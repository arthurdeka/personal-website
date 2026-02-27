import WindowLayout from "../components/WindowLayout";

const AboutMePage: React.FC = () => {
  return (
    <WindowLayout
      title="Sobre mim"
      subtitle="Perfil, objetivo e visao"
      statusLeft="Perfil"
    >
      <div className="about-grid">
        <fieldset>
          <legend>Quem sou</legend>
          <p>
            Arthur Rodrigues, 21 anos, engenheiro de software cursando Sistemas
            de Informacao pela Universidade Estadual de Montes Claros.
          </p>
        </fieldset>

        <fieldset>
          <legend>Objetivo</legend>
          <p>
            Construir uma carreira solida centrada em Java Spring Boot e
            tecnologias adjacentes, entregando produtos uteis e confiaveis.
          </p>
        </fieldset>

        <fieldset>
          <legend>Local</legend>
          <p>Montes Claros, Minas Gerais - Brasil.</p>
        </fieldset>

        <fieldset>
          <legend>Visao</legend>
          <p>
            Vejo programacao como a arte de transformar ideias em solucoes
            praticas com impacto real.
          </p>
        </fieldset>
      </div>
    </WindowLayout>
  );
};

export default AboutMePage;
