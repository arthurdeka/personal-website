import { useState } from "react";
import WindowLayout from "../components/WindowLayout";

const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/arthur-wa-rodrigues/",
    note: "Contato profissional.",
  },
  {
    name: "GitHub",
    url: "https://github.com/arthurdeka",
    note: "Projetos open-source e codigo.",
  },
];

const EMAIL = "arthurdk01@gmail.com";

const SocialsPage: React.FC = () => {
  const [copyFeedback, setCopyFeedback] = useState("");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopyFeedback("Email copiado para a area de transferencia.");
    } catch {
      setCopyFeedback("Nao foi possivel copiar o email.");
    }

    window.setTimeout(() => setCopyFeedback(""), 2200);
  };

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
        <legend>Email</legend>
        <p>{EMAIL}</p>
        <div className="button-row">
          <button type="button" className="button-link" onClick={handleCopyEmail}>
            Copiar email
          </button>
        </div>
        {copyFeedback ? <p className="muted">{copyFeedback}</p> : null}
      </fieldset>
    </WindowLayout>
  );
};

export default SocialsPage;
