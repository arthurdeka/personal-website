import WindowLayout from "../components/WindowLayout";

const stackGroups = [
  {
    title: "Linguagens de programação",
    items: ["TypeScript", "JavaScript", "Java", "Python"],
  },
  {
    title: "Front-end",
    items: [
      "React, Next.js, React Native, Vue",
      "Tailwind, Expo, ShadCN",
    ],
  },
  {
    title: "Back-end",
    items: ["Node.js", "NestJS", "Express.js", "Java Spring Boot"],
  },
  {
    title: "Banco de dados e ORM",
    items: ["MySQL", "MongoDB", "Prisma ORM", "Hibernate"],
  },
  {
    title: "Idiomas",
    items: ["Inglês avançado (C1): leio, converso, entendo e escrevo bem."],
  },
  {
    title: "Ferramentas",
    items: [
      "Git",
      "Vercel",
      "Coolify",
      "Integração com modelos de IA (Langchain, OpenAI API)",
    ],
  },
];

const MyStack: React.FC = () => {
  return (
    <WindowLayout
      title="Meu stack"
      subtitle="Tecnologias e ferramentas principais"
      statusLeft="Stack"
    >
      <div className="stack-grid">
        {stackGroups.map((group) => (
          <fieldset key={group.title}>
            <legend>{group.title}</legend>
            <ul className="list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </fieldset>
        ))}
      </div>
    </WindowLayout>
  );
};

export default MyStack;
