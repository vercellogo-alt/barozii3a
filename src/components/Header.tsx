import React, { useState } from "react";

type SubItem = {
  label: string;
  href: string;
};

type MenuItem = {
  label: string;
  href?: string;
  children?: SubItem[];
};

const topLinks = [
  {
    label: "Área do Professor",
    href: "https://siga01.activesoft.com.br/login/?instituicao=RDS",
  },
  {
    label: "Área do Aluno",
    href: "https://classapp.com.br/auth",
  },
];

const menuItems: MenuItem[] = [
  {
    label: "Institucional",
    children: [
      {
        label: "Colégio Raphael Di Santo – Unidade Garcia",
        href: "https://raphaeldisanto.com.br/instituicao/",
      },
      {
        label: "Colégio Raphael Di Santo – Unidade Mimosa",
        href: "https://raphaeldisanto.com.br/colegio-raphael-di-santo-vila-mimosa/",
      },
      { label: "Metodologia", href: "https://raphaeldisanto.com.br/metodologia/" },
      { label: "Infraestrutura", href: "https://raphaeldisanto.com.br/infraestrutura/" },
      { label: "Normas", href: "https://raphaeldisanto.com.br/normas/" },
    ],
  },
  {
    label: "Ensino",
    children: [
      { label: "Educação Infantil – RDS Mimosa", href: "https://raphaeldisanto.com.br/educacao-infantil/" },
      { label: "Ensino Fundamental I – RDS Mimosa", href: "https://raphaeldisanto.com.br/ensino-fundamental-i/" },
      { label: "Ensino Fundamental II – Unidades Garcia e Mimosa", href: "https://raphaeldisanto.com.br/ensino-fundamental-ii/" },
      { label: "Ensino Médio – Unidades Garcia e Mimosa", href: "https://raphaeldisanto.com.br/ensino-medio/" },
      {
        label: "Ensino Médio Técnico – Unidade Garcia",
        href: "https://raphaeldisanto.com.br/ensino-medio-tecnico/",
      },
    ],
  },
  {
    label: "Tour 360º",
    children: [
      { label: "Tour 360º – RDS Jardim Garcia – Parte I", href: "https://raphaeldisanto.com.br/tour-360o-unidade-jardim-garcia-1/" },
      { label: "Tour 360º – RDS Jardim Garcia – Parte II", href: "https://raphaeldisanto.com.br/tour-360o-unidade-jardim-garcia/" },
      { label: "Tour 360º – Colégio Raphael Di Santo – Vila Mimosa", href: "https://raphaeldisanto.com.br/tour-360-unidade-vila-mimosa/" },
      { label: "Tour 360º – Arena RDS", href: "https://raphaeldisanto.com.br/tour-360o-arena-rds/" },
    ],
  },
  {
    label: "RDS Esportes",
    href: "https://raphaeldisanto.com.br/rds-esporte/",
    children: [
      { label: "Arena Raphael Di Santo", href: "https://raphaeldisanto.com.br/arena-rds/" },
      { label: "Alunos Atletas RDS", href: "https://raphaeldisanto.com.br/alunos-atletas/" },
      {
        label: "Notícia",
        href: "https://raphaeldisanto.com.br/alunos-patrocinados-pelos-colegios-rds-e-vivap-conquistam-o-3o-lugar-em-categorias-diferentes-no-campeonato-nacional-de-tenis-de-mesa-challenge-plus/",
      },
    ],
  },
  {
    label: "Publicações",
    href: "https://raphaeldisanto.com.br/noticias/",
    children: [
      { label: "Acontece", href: "https://raphaeldisanto.com.br/acontece/" },
      { label: "Vídeos", href: "https://raphaeldisanto.com.br/videos/" },
      { label: "RDS NA MÍDIA", href: "https://raphaeldisanto.com.br/rds-na-midia-i/" },
      { label: "Clube de Benefícios", href: "https://raphaeldisanto.com.br/clube-de-beneficios/" },
      { label: "Aprovados", href: "https://raphaeldisanto.com.br/aprovados/" },
    ],
  },
  {
    label: "Contato",
    href: "https://raphaeldisanto.com.br/contato-2/",
    children: [
      { label: "Contato", href: "https://raphaeldisanto.com.br/contato/" },
      { label: "Trabalhe Conosco", href: "https://raphaeldisanto.com.br/trabalhe-conosco/" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="rds-header" role="banner">
      <div className="top-bar">
        <div className="top-bar-bg" />
        <div className="left-widgets">
          <div className="text-area">
            <p>
              <strong>Localização</strong> Antônio Ferreira Laranja, 57 - Jd. Garcia - Campinas
            </p>
          </div>
          <div className="text-area">
            <p>
              <strong>Localização</strong> Rua das Gardênias, 90 - Vila Mimosa - Campinas
            </p>
          </div>
        </div>

        <div className="right-widgets">
          <nav className="mini-nav" aria-label="Links rápidos">
            <ul id="top-menu">
              {topLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="desktop-header">
        <div className="branding">
          <div id="site-title" className="assistive-text">
            Colégio Raphael Di Santo
          </div>
          <div id="site-description" className="assistive-text">
            Ed. Infantil, Fundamental e Ensino Médio
          </div>

          <a className="logo-link" href="https://raphaeldisanto.com.br/">
            <img
              className="logo"
              src="https://raphaeldisanto.com.br/wp-content/uploads/2020/05/logo-rds.png"
              srcSet="https://raphaeldisanto.com.br/wp-content/uploads/2020/05/logo-rds.png 140w"
              width={140}
              height={125}
              sizes="140px"
              alt="Colégio Raphael Di Santo"
            />
          </a>
        </div>

        <nav className="main-nav" aria-label="Menu principal">
          <ul id="primary-menu">
            {menuItems.map((item) => (
              <li key={item.label} className={item.children ? "has-children" : ""}>
                <a
                  href={item.href ?? "#"}
                  onClick={(e) => item.children && !item.href && e.preventDefault()}
                  className={item.href ? "" : "not-clickable-item"}
                >
                  {item.label}
                </a>

                {item.children?.length ? (
                  <ul className="sub-nav">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a href={child.href}>{child.label}</a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>

        <div className="desktop-cta">
          <a href="https://raphaeldisanto.com.br/matriculas" className="cta-btn">
            MATRÍCULAS ABERTAS
          </a>
        </div>
      </div>

      <div className="mobile-header">
        <button
          type="button"
          className="mobile-menu-btn"
          aria-label="Abrir menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="lines" />
        </button>

        <div className="mobile-branding">
          <a href="https://raphaeldisanto.com.br/">
            <img
              className="logo"
              src="https://raphaeldisanto.com.br/wp-content/uploads/2020/05/logo-rds.png"
              srcSet="https://raphaeldisanto.com.br/wp-content/uploads/2020/05/logo-rds.png 140w"
              width={140}
              height={125}
              sizes="140px"
              alt="Colégio Raphael Di Santo"
            />
          </a>
        </div>

        <div className="mobile-actions">
          <a href="https://raphaeldisanto.com.br/matriculas" className="cta-btn mobile-cta">
            MATRÍCULAS ABERTAS
          </a>
        </div>
      </div>

      <div className={`mobile-drawer ${mobileOpen ? "open" : ""}`}>
        <nav aria-label="Menu mobile">
          <ul>
            {menuItems.map((item) => (
              <li key={item.label}>
                <a href={item.href ?? "#"} onClick={(e) => item.children && !item.href && e.preventDefault()}>
                  {item.label}
                </a>
                {item.children?.length ? (
                  <ul className="mobile-sub">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a href={child.href}>{child.label}</a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <style>{`
        .rds-header {
          width: 100%;
          background: #fff;
          box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.07);
          position: relative;
          z-index: 102;
          font: normal 15px/23px "Lato", Helvetica, Arial, Verdana, sans-serif;
          color: #3d3838;
        }

        .assistive-text {
          position: absolute;
          left: -9999px;
          top: auto;
          width: 1px;
          height: 1px;
          overflow: hidden;
        }

        .top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 10px 50px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          background: #fff;
        }

        .left-widgets {
          display: flex;
          gap: 28px;
          flex-wrap: wrap;
          align-items: center;
        }

        .text-area p {
          margin: 0;
          font-size: 14px;
          line-height: 1.4;
          color: #3d3838;
        }

        .text-area strong {
          font-weight: 700;
        }

        .right-widgets {
          margin-left: auto;
        }

        #top-menu {
          display: flex;
          align-items: center;
          gap: 18px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        #top-menu a {
          text-decoration: none;
          color: #3d3838;
          font-size: 14px;
          font-weight: 600;
          transition: opacity 0.2s ease;
        }

        #top-menu a:hover {
          opacity: 0.75;
        }

        .desktop-header {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 24px;
          padding: 0 50px;
          min-height: 108px;
          background: #fff;
        }

        .branding {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .logo-link {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
        }

        .logo {
          display: block;
          width: 140px;
          height: auto;
        }

        #primary-menu {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 4px;
          list-style: none;
          margin: 0;
          padding: 0;
          flex-wrap: wrap;
        }

        #primary-menu > li {
          position: relative;
        }

        #primary-menu > li > a {
          display: inline-flex;
          align-items: center;
          padding: 18px 14px;
          color: #3d3838;
          text-decoration: none;
          font-size: 15px;
          font-weight: 600;
          white-space: nowrap;
          transition: background 0.2s ease, color 0.2s ease;
        }

        #primary-menu > li > a:hover {
          color: #b18a2c;
        }

        .has-children:hover > .sub-nav {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          pointer-events: auto;
        }

        .sub-nav {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 290px;
          background: #fff;
          box-shadow: 0 16px 30px rgba(0, 0, 0, 0.12);
          list-style: none;
          margin: 0;
          padding: 8px 0;
          opacity: 0;
          visibility: hidden;
          transform: translateY(6px);
          transition: all 0.18s ease;
          pointer-events: none;
          z-index: 999;
        }

        .sub-nav li a {
          display: block;
          padding: 10px 16px;
          color: #3d3838;
          text-decoration: none;
          font-size: 14px;
          line-height: 1.35;
        }

        .sub-nav li a:hover {
          background: #f5f5f5;
        }

        .desktop-cta {
          display: flex;
          justify-content: flex-end;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 18px;
          border-radius: 999px;
          text-decoration: none;
          color: #fff;
          background: #c89b2c;
          font-weight: 700;
          letter-spacing: 0.02em;
          box-shadow: 0 10px 20px rgba(200, 155, 44, 0.22);
          transition: transform 0.2s ease, opacity 0.2s ease;
          white-space: nowrap;
        }

        .cta-btn:hover {
          transform: translateY(-1px);
          opacity: 0.95;
        }

        .mobile-header {
          display: none;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding: 12px 16px;
        }

        .mobile-menu-btn {
          width: 44px;
          height: 44px;
          border: 0;
          border-radius: 12px;
          background: #f2f2f2;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .lines {
          position: relative;
          width: 20px;
          height: 2px;
          background: #3d3838;
          display: block;
        }

        .lines::before,
        .lines::after {
          content: "";
          position: absolute;
          left: 0;
          width: 20px;
          height: 2px;
          background: #3d3838;
        }

        .lines::before {
          top: -6px;
        }

        .lines::after {
          top: 6px;
        }

        .mobile-branding .logo {
          width: 110px;
        }

        .mobile-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .mobile-cta {
          padding: 10px 14px;
          font-size: 13px;
        }

        .mobile-drawer {
          display: none;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          background: #fff;
          padding: 10px 16px 18px;
        }

        .mobile-drawer.open {
          display: block;
        }

        .mobile-drawer ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .mobile-drawer > nav > ul > li {
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }

        .mobile-drawer a {
          display: block;
          padding: 12px 0;
          text-decoration: none;
          color: #3d3838;
          font-weight: 600;
        }

        .mobile-sub {
          padding-left: 14px;
          padding-bottom: 8px;
        }

        .mobile-sub a {
          font-weight: 500;
          color: #666;
          padding: 8px 0;
        }

        @media (max-width: 1180px) {
          .top-bar,
          .desktop-header {
            padding-left: 20px;
            padding-right: 20px;
          }

          .desktop-header {
            gap: 18px;
          }

          #primary-menu > li > a {
            padding: 16px 10px;
            font-size: 14px;
          }
        }

        @media (max-width: 980px) {
          .top-bar,
          .desktop-header {
            display: none;
          }

          .mobile-header {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}