import { ReactNode } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

type Locale = "pt" | "en";

type WindowLayoutProps = {
  title: string;
  subtitle?: string;
  statusLeft?: string;
  statusRight?: string;
  locale?: Locale;
  basePath?: string;
  children: ReactNode;
};

const WindowLayout = ({
  title,
  subtitle,
  statusLeft,
  statusRight,
  locale = "pt",
  basePath = "",
  children,
}: WindowLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isEnglish = locale === "en";
  const isEnglishRoute = location.pathname === "/en" || location.pathname.startsWith("/en/");

  const pathWithoutLanguage = isEnglishRoute
    ? location.pathname.slice(3) || "/"
    : location.pathname || "/";

  const normalizedPath = pathWithoutLanguage.startsWith("/")
    ? pathWithoutLanguage
    : `/${pathWithoutLanguage}`;

  const ptPath = `${normalizedPath}${location.search}${location.hash}`;
  const enPath = `${
    normalizedPath === "/" ? "/en" : `/en${normalizedPath}`
  }${location.search}${location.hash}`;

  const withBase = (path: string) => {
    if (!basePath) return path;
    if (path === "/") return basePath;
    return `${basePath}${path}`;
  };

  const navItems = isEnglish
    ? [
        { to: withBase("/"), label: "Home" },
        { to: withBase("/projects"), label: "Projects" },
        { to: withBase("/mystack"), label: "My stack" },
        { to: withBase("/professionalxp"), label: "Experience & education" },
        { to: withBase("/socials"), label: "Socials" },
      ]
    : [
        { to: withBase("/"), label: "Inicio" },
        { to: withBase("/projects"), label: "Projetos" },
        { to: withBase("/mystack"), label: "Meu stack" },
        { to: withBase("/professionalxp"), label: "Experiencia & educacao" },
        { to: withBase("/socials"), label: "Redes sociais" },
      ];

  return (
    <div className="desktop">
      <div className="window language-window">
        <div className="title-bar">
          <div className="title-bar-text">
            {isEnglish ? "Language" : "Idioma"}
          </div>
        </div>
        <div className="window-body">
          <p className="language-label">
            {isEnglish ? "Select website language:" : "Selecione o idioma do site:"}
          </p>
          <div className="language-actions">
            <Link
              to={ptPath}
              className={`button-link lang-link ${!isEnglishRoute ? "active" : ""}`}
            >
              Português
            </Link>
            <Link
              to={enPath}
              className={`button-link lang-link ${isEnglishRoute ? "active" : ""}`}
            >
              English
            </Link>
          </div>
        </div>
      </div>

      <div className="window main-window">
        <div className="title-bar">
          <div className="title-bar-text">
            <span className="window-title">
              <img
                className="window-favicon"
                src="/xp-favicon.png"
                alt=""
                width={16}
                height={16}
                aria-hidden="true"
              />
              {title}
            </span>
          </div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" onClick={() => navigate(withBase("/"))} />
          </div>
        </div>

        <div className="window-body layout-grid">
          <aside className="sidebar">
            <div className="sidebar-profile">
              <img
                src="/xp-favicon.png"
                alt="Arthur Rodrigues"
                width={48}
                height={48}
              />
              <div>
                <strong>Arthur Rodrigues</strong>
                <div className="muted">
                  {isEnglish ? "Full-Stack Developer" : "Desenvolvedor Full-Stack"}
                </div>
              </div>
            </div>

            <div className="sidebar-section">
              <div className="sidebar-title">
                {isEnglish ? "Navigation" : "Navegacao"}
              </div>
              <ul className="tree-view nav-tree">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-section">
              <div className="sidebar-title">
                {isEnglish ? "Quick contact" : "Contato rapido"}
              </div>
              <div className="field-row-stacked">
                <span className="field-label">Email</span>
                <div className="readonly-field" role="textbox" aria-readonly="true">
                  arthurdk01@gmail.com
                </div>
              </div>
              <div className="field-row-stacked">
                <span className="field-label">{isEnglish ? "Location" : "Local"}</span>
                <div className="readonly-field" role="textbox" aria-readonly="true">
                  Montes Claros, MG - Brasil
                </div>
              </div>
            </div>
          </aside>

          <main className="content">
            {subtitle ? <div className="page-subtitle">{subtitle}</div> : null}
            {children}
          </main>
        </div>

        <div className="status-bar">
          <p className="status-bar-field">
            {statusLeft ?? (isEnglish ? "Ready" : "Pronto")}
          </p>
          <p className="status-bar-field">
            {statusRight ??
              (isEnglish ? "Personal portfolio in xp.css" : "Portfolio pessoal em xp.css")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WindowLayout;
