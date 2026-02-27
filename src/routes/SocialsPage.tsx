import WindowLayout from "../components/WindowLayout";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/arthurdeka",
    note: "Desenvolvimento e utilidades.",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/arthur-wa-rodrigues/",
    note: "Contato profissional.",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@arthurcodes/videos",
    note: "Projetos pessoais e tutoriais.",
  },
];

const SocialsPage: React.FC = () => {
  return (
    <WindowLayout
      title="Redes sociais"
      subtitle="Onde me encontrar"
      statusLeft="Contato"
    >
      <div className="social-grid">
        {socials.map((social) => (
          <fieldset key={social.name}>
            <legend>{social.name}</legend>
            <p>{social.note}</p>
            <div className="button-row">
              <a
                className="button-link"
                href={social.url}
                target="_blank"
                rel="noreferrer"
              >
                Abrir
              </a>
            </div>
          </fieldset>
        ))}
      </div>

      <fieldset style={{ marginTop: "12px" }}>
        <legend>WhatsApp</legend>
        <p>Entre em contato via LinkedIn ou email.</p>
      </fieldset>
    </WindowLayout>
  );
};

export default SocialsPage;
