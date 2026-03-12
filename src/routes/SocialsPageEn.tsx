import { useState } from "react";
import WindowLayout from "../components/WindowLayout";

const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/arthur-wa-rodrigues/",
    note: "Professional contact.",
  },
  {
    name: "GitHub",
    url: "https://github.com/arthurdeka",
    note: "Open-source projects and code.",
  },
];

const EMAIL = "arthurdk01@gmail.com";

const SocialsPageEn: React.FC = () => {
  const [copyFeedback, setCopyFeedback] = useState("");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopyFeedback("Email copied to clipboard.");
    } catch {
      setCopyFeedback("Could not copy email.");
    }

    window.setTimeout(() => setCopyFeedback(""), 2200);
  };

  return (
    <WindowLayout
      title="Socials"
      subtitle="Where to find me"
      statusLeft="Contact"
      locale="en"
      basePath="/en"
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
                Open
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
            Copy email
          </button>
        </div>
        {copyFeedback ? <p className="muted">{copyFeedback}</p> : null}
      </fieldset>
    </WindowLayout>
  );
};

export default SocialsPageEn;
