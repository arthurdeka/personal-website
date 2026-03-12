import WindowLayout from "../components/WindowLayout";

const experiences = [
  {
    title: "B91 Pagamentos",
    period: "Jul 2025 - Presente",
    details: [
      "Cargo: Desenvolvedor Full-Stack.",
      "Integração de APIs bancarias e de outras instituições de pagamento.",
      "Desenvolvimento de aplicativos mobile com React Native e Expo.",
      "Desenvolvimento full-stack com Next.js e NestJS.",
      "Gerenciamento de bancos MongoDB e MySQL com Prisma ORM.",
      "Atuação constante no ecossistema TypeScript.",
    ],
  },
  {
    title: "Análise Informática",
    period: "Set 2024 - Jul 2025",
    details: [
      "Cargo: Desenvolvedor Full-Stack.",
      "Desenvolvimento de ChatBot alimentado pela API da OpenAI.",
      "Desenvolvimento de sistemas CRUD com NestJS e React.",
      "Planejamento e gerenciamento de banco de dados relacional MySQL.",
    ],
  },
  {
    title: "Iniciação Científica",
    period: "Nov 2022 - Nov 2023",
    details: [
      "Cargo: Desenvolvedor principal.",
      "Ferramenta para auxiliar pesquisadores iniciantes na produção de trabalhos acadêmicos.",
      "Projeto financiado pelo Conselho Nacional de Desenvolvimento Científico e Tecnológico.",
      "Desenvolvido usando JavaScript, tecnologias WEB e banco SQL.",
      "Publicação de artigo premiado como 2º melhor trabalho em Ciência da Computação no Congresso Internacional de Educação e Inovação da Unimontes.",
    ],
  },
];

const education = [
  {
    title: "Bacharelado em Sistemas de Informação",
    period: "2021 - 2026",
    details: ["Universidade Estadual de Montes Claros."],
  },
];

const ProfessionalExperience: React.FC = () => {
  return (
    <WindowLayout
      title="Experiência & Educação"
      subtitle="Histórico profissional e acadêmico"
      statusLeft="Experiência"
    >
      <fieldset>
        <legend>Experiência profissional</legend>
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
