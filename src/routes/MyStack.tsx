import WindowLayout from "../components/WindowLayout";

const stackGroups = [
  {
    title: "Front-end",
    items: [
      "JavaScript, TypeScript, JSX, TSX",
      "Vue, React",
      "Bootstrap, Tailwind",
    ],
  },
  {
    title: "Back-end",
    items: [
      "Java 17 Spring Boot, Python Flask, Node.js",
      "Java Lombok, Express.js",
      "Testes automatizados",
    ],
  },
  {
    title: "Banco de dados",
    items: ["MySQL, MariaDB, PostgreSQL, SQLite", "MongoDB"],
  },
  {
    title: "Ferramentas e DevOps",
    items: [
      "Vercel, Render (Front-end)",
      "Lambda AWS, EC2 AWS (Back-end)",
      "Neon Serverless Postgres, EC2 AWS (DB)",
      "DuckDNS (DNS)",
      "Modelos de LLM (Langchain, OpenAI API)",
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
