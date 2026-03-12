import WindowLayout from "../components/WindowLayout";

const stackGroups = [
  {
    title: "Programming languages",
    items: ["TypeScript", "JavaScript", "Java", "Python"],
  },
  {
    title: "Front-end",
    items: ["React, Next.js, React Native, Vue", "Tailwind, Expo, ShadCN"],
  },
  {
    title: "Back-end",
    items: ["Node.js", "NestJS", "Express.js", "Java Spring Boot"],
  },
  {
    title: "Databases and ORM",
    items: ["MySQL", "MongoDB", "Prisma ORM", "Hibernate"],
  },
  {
    title: "Languages",
    items: ["English advanced (C1): reading, speaking, listening, and writing."],
  },
  {
    title: "Tools",
    items: [
      "Git",
      "Vercel",
      "Coolify",
      "AI model integration (Langchain, OpenAI API)",
    ],
  },
];

const MyStackEn: React.FC = () => {
  return (
    <WindowLayout
      title="My stack"
      subtitle="Main technologies and tools"
      statusLeft="Stack"
      locale="en"
      basePath="/en"
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

export default MyStackEn;
