import WindowLayout from "../components/WindowLayout";

const HomePageEn: React.FC = () => {
  return (
    <WindowLayout
      title="Arthur Rodrigues - Portfolio"
      subtitle="Full-Stack Developer | TypeScript, React, NestJS, Next.js"
      statusLeft="Welcome"
      statusRight="Use the menu on the left"
      locale="en"
      basePath="/en"
    >
      <div className="home-hero">
        <div className="home-hero-content">
          <h1>Arthur Rodrigues</h1>
          <p>Full-Stack Developer</p>
          <p className="muted">Montes Claros, MG - Brazil</p>
        </div>
        <img
          className="home-photo"
          src="/foto-pessoal.jpg"
          alt="Personal photo of Arthur Rodrigues"
          width={64}
          height={64}
          loading="eager"
        />
      </div>

      <div className="home-grid">
        <fieldset>
          <legend>Summary</legend>
          <p>
            I work in the TypeScript ecosystem with a focus on full-stack
            development, payment API integrations, and mobile apps.
          </p>
          <p className="muted">
            I see programming as an art capable of bringing ideas to life.
          </p>
        </fieldset>

        <fieldset>
          <legend>Highlights</legend>
          <ul className="list">
            <li>Full-Stack Developer at B91 Pagamentos since Jul 2025</li>
            <li>Experience with Next.js, NestJS, React Native, and Expo</li>
            <li>MongoDB and MySQL management with Prisma ORM</li>
          </ul>
        </fieldset>

        <fieldset>
          <legend>Contact</legend>
          <p>Email: arthurdk01@gmail.com</p>
          <p className="muted">
            LinkedIn:{" "}
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

export default HomePageEn;
