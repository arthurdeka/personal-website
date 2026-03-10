import { ReactNode } from "react";
import { NavLink, useNavigate } from "react-router-dom";

type WindowLayoutProps = {
  title: string;
  subtitle?: string;
  statusLeft?: string;
  statusRight?: string;
  children: ReactNode;
};

const navItems = [
  { to: "/", label: "Inicio" },
  { to: "/about", label: "Sobre mim" },
  { to: "/projects", label: "Projetos" },
  { to: "/mystack", label: "Meu stack" },
  { to: "/professionalxp", label: "Experiencia & educacao" },
  { to: "/socials", label: "Redes sociais" },
];

const WindowLayout = ({
  title,
  subtitle,
  statusLeft,
  statusRight,
  children,
}: WindowLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="desktop">
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
            <button aria-label="Close" onClick={() => navigate("/")} />
          </div>
        </div>

        <div className="window-body layout-grid">
          <aside className="sidebar">
            <div className="sidebar-profile">
              <img src="/xp-favicon.png" alt="Arthur Rodrigues" width={48} height={48} />
              <div>
                <strong>Arthur Rodrigues</strong>
                <div className="muted">Engenheiro de Software</div>
              </div>
            </div>

            <div className="sidebar-section">
              <div className="sidebar-title">Navegacao</div>
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
              <div className="sidebar-title">Contato rapido</div>
              <div className="field-row-stacked">
                <span className="field-label">Email</span>
                <div className="readonly-field" role="textbox" aria-readonly="true">
                  arthurdk01@gmail.com
                </div>
              </div>
              <div className="field-row-stacked">
                <span className="field-label">Local</span>
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
          <p className="status-bar-field">{statusLeft ?? "Pronto"}</p>
          <p className="status-bar-field">
            {statusRight ?? "Portfolio pessoal em xp.css"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WindowLayout;
