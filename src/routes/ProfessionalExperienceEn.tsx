import WindowLayout from "../components/WindowLayout";

const experiences = [
  {
    title: "B91 Pagamentos",
    period: "Jul 2025 - Present",
    details: [
      "Role: Full-Stack Developer.",
      "Integration of banking APIs and other payment institution APIs.",
      "Mobile application development with React Native and Expo.",
      "Full-stack development with Next.js and NestJS.",
      "MongoDB and MySQL database management with Prisma ORM.",
      "Constant work in the TypeScript ecosystem.",
    ],
  },
  {
    title: "Analise Informatica",
    period: "Sep 2024 - Jul 2025",
    details: [
      "Role: Full-Stack Developer.",
      "ChatBot development powered by the OpenAI API.",
      "CRUD system development with NestJS and React.",
      "Planning and management of relational MySQL databases.",
    ],
  },
  {
    title: "Scientific Research Program",
    period: "Nov 2022 - Nov 2023",
    details: [
      "Role: Lead Developer.",
      "Tool to support early-stage researchers in producing academic papers.",
      "Project funded by the National Council for Scientific and Technological Development.",
      "Built using JavaScript, web technologies, and SQL database.",
      "Published paper awarded as the 2nd best Computer Science work at Unimontes International Congress of Education and Innovation.",
    ],
  },
];

const education = [
  {
    title: "Bachelor's Degree in Information Systems",
    period: "2021 - 2026",
    details: ["State University of Montes Claros."],
  },
];

const ProfessionalExperienceEn: React.FC = () => {
  return (
    <WindowLayout
      title="Experience & Education"
      subtitle="Professional and academic background"
      statusLeft="Experience"
      locale="en"
      basePath="/en"
    >
      <fieldset>
        <legend>Professional experience</legend>
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
        <legend>Education</legend>
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

export default ProfessionalExperienceEn;
