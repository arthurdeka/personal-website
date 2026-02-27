import WindowLayout from "../components/WindowLayout";

const experiences = [
  {
    title: "Analise Informatica",
    period: "2024 - presente",
    details: [
      "Desenvolvimento de aplicacao LLM de ChatBot e aplicacoes CRUD para a empresa.",
    ],
  },
  {
    title: "VOX Internet",
    period: "2023 - 2024",
    details: ["Suporte computacional."],
  },
  {
    title: "Iniciacao Cientifica",
    period: "2022 - 2023",
    details: [
      "Bolsa paga com contrato de 1 ano.",
      "Desenvolvimento de aplicacao com Python Flask e React.",
    ],
  },
];

const education = [
  {
    title: "Bacharelado em Sistemas de Informacao",
    period: "2021 - presente",
    details: ["Universidade Estadual de Montes Claros."],
  },
];

const ProfessionalExperience: React.FC = () => {
  return (
    <WindowLayout
      title="Experiencia & Educacao"
      subtitle="Historico profissional e academico"
      statusLeft="Experiencia"
    >
      <fieldset>
        <legend>Experiencia profissional</legend>
        <div className="xp-list">
          {experiences.map((experience) => (
            <div key={experience.title} className="xp-item">
              <div className="xp-header">
                <strong>{experience.title}</strong>
                <span className="muted">{experience.period}</span>
              </div>
              <ul className="list">
                {experience.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </fieldset>

      <fieldset style={{ marginTop: "12px" }}>
        <legend>Educacao</legend>
        <div className="xp-list">
          {education.map((item) => (
            <div key={item.title} className="xp-item">
              <div className="xp-header">
                <strong>{item.title}</strong>
                <span className="muted">{item.period}</span>
              </div>
              <ul className="list">
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </fieldset>
    </WindowLayout>
  );
};

export default ProfessionalExperience;
