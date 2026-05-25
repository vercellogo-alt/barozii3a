import React from "react";

type LinkItem = {
  label: string;
  href: string;
};

const menuItems: LinkItem[] = [
  { label: "Colégio Raphael Di Santo – Unidade Garcia", href: "https://raphaeldisanto.com.br/instituicao/" },
  { label: "Colégio Raphael Di Santo – Unidade Mimosa", href: "https://raphaeldisanto.com.br/colegio-raphael-di-santo-vila-mimosa/" },
  { label: "Educação Infantil – RDS Mimosa", href: "https://raphaeldisanto.com.br/educacao-infantil/" },
  { label: "Ensino Fundamental I – RDS Mimosa", href: "https://raphaeldisanto.com.br/ensino-fundamental-i/" },
  { label: "Ensino Fundamental II – Unidades Garcia e Mimosa", href: "https://raphaeldisanto.com.br/ensino-fundamental-ii/" },
  { label: "Ensino Médio – Unidades Garcia e Mimosa", href: "https://raphaeldisanto.com.br/ensino-medio/" },
  { label: "Ensino Médio Técnico – Unidade Garcia", href: "https://raphaeldisanto.com.br/ensino-medio-tecnico/" },
  { label: "Contato", href: "https://raphaeldisanto.com.br/contato/" },
];

function SocialIcon({
  type,
  href,
}: {
  type: "facebook" | "instagram" | "youtube";
  href: string;
}) {
  return (
    <a className="social" href={href} target="_blank" rel="noreferrer" aria-label={type}>
      {type === "facebook" && (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 8.5V7c0-.8.5-1 1-1h2V3h-2.7C11.9 3 11 4.8 11 7v1.5H9V12h2v9h3v-9h2.4l.6-3.5H14Z" />
        </svg>
      )}
      {type === "instagram" && (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 2A2.5 2.5 0 0 0 5 7.5v9A2.5 2.5 0 0 0 7.5 19h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 16.5 5h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-2.2a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1Z" />
        </svg>
      )}
      {type === "youtube" && (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21.7 7.2a2.5 2.5 0 0 0-1.8-1.8C18.3 5 12 5 12 5s-6.3 0-7.9.4A2.5 2.5 0 0 0 2.3 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .3 4.8 2.5 2.5 0 0 0 1.8 1.8C5.7 19 12 19 12 19s6.3 0 7.9-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.3-4.8ZM10 15.2V8.8L15.6 12 10 15.2Z" />
        </svg>
      )}
    </a>
  );
}

export default function Footer() {
  return (
    <footer id="rodape" className="footer-rds">
      <div className="footer-inner">
        <div className="top-row">
          <div className="brand-col">
            <img
              src="https://raphaeldisanto.com.br/wp-content/uploads/2020/05/logo-rodape.png"
              width={125}
              height={56}
              alt="Colégio Raphael Di Santo"
            />
          </div>

          <div className="social-col">
            <div className="social-text">
              Siga-nos nas Redes Sociais
            </div>
            <div className="social-links">
              <SocialIcon
                type="facebook"
                href="https://www.facebook.com/InstitutoRaphaelDiSanto/?ref=bookmarks"
              />
              <SocialIcon
                type="instagram"
                href="https://www.instagram.com/colegioraphaeldisanto/?hl=pt-br"
              />
              <SocialIcon
                type="youtube"
                href="https://www.youtube.com/channel/UCGHL8rUiIOnIx1Y6ztvSVvw"
              />
            </div>
          </div>

          <div className="spacer-col" />
        </div>

        <div className="divider" />

        <div className="bottom-row">
          <div className="menu-col">
            <ul className="footer-menu">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="maker-col">
            <img
              className="maker-img"
              src="https://raphaeldisanto.com.br/wp-content/uploads/2020/05/maker-175x175.png"
              width={175}
              height={175}
              alt="maker"
              title="maker"
            />

            <div className="este-mobile">
              <img
                src="https://raphaeldisanto.com.br/wp-content/uploads/2025/07/ESTE.png"
                width={92}
                height={112}
                alt="ESTE"
                title="ESTE"
              />
            </div>

            <div className="contact">
              <p>
                <span className="muted">
                  <strong>E-mail:</strong>
                </span>{" "}
                contato@raphaeldisanto.com.br
                <br />
                <span className="muted">
                  <strong>Telefone:</strong>
                </span>{" "}
                (19) 3728-7700
                <br />
                <strong className="muted">WhatsApp</strong>:{" "}
                <a
                  href="https://api.whatsapp.com/send?phone=5519997988911&text=Ol%C3%A1.%20Quero%20mais%20informa%C3%A7%C3%B5es"
                  target="_blank"
                  rel="noreferrer"
                >
                  (19) 99660-6664
                </a>
              </p>
            </div>
          </div>

          <div className="este-col">
            <img
              className="este-desktop"
              src="https://raphaeldisanto.com.br/wp-content/uploads/2025/07/ESTE.png"
              width={92}
              height={112}
              alt="ESTE"
              title="ESTE"
            />
          </div>
        </div>
      </div>

      <style>{`
        .footer-rds {
          width: 100%;
          background: #002442 !important;
          color: #fff;
          overflow: hidden;
          font: normal 15px/23px "Lato", Helvetica, Arial, Verdana, sans-serif;
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .footer-inner {
          width: 100%;
          max-width: 1334px;
          margin: 0 auto;
          padding: 24px 52px 22px;
          box-sizing: border-box;
        }

        .top-row {
          display: grid;
          grid-template-columns: 1fr 2fr 1fr;
          gap: 24px;
          align-items: center;
          min-height: 96px;
        }

        .brand-col {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        .social-col {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          text-align: center;
        }

        .social-text {
          font-size: 18px;
          line-height: 1.3;
          color: #fff;
          font-weight: 400;
        }

        .social-links {
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .social {
          width: 34px;
          height: 34px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.22);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          text-decoration: none;
          transition: transform 0.2s ease, background 0.2s ease, opacity 0.2s ease;
        }

        .social:hover {
          transform: translateY(-1px);
          background: rgba(255, 255, 255, 0.08);
        }

        .social svg {
          width: 16px;
          height: 16px;
          fill: currentColor;
          display: block;
        }

        .divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(to right, transparent 0%, #e4002b 10%, #e4002b 90%, transparent 100%);
          margin: 18px 0 18px;
        }

        .bottom-row {
          display: grid;
          grid-template-columns: 1.3fr 1fr 0.7fr;
          gap: 24px;
          align-items: start;
        }

        .footer-menu {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-menu li {
          margin: 0 0 8px;
        }

        .footer-menu a {
          color: #ffffff;
          text-decoration: none;
          font-size: 13px;
          line-height: 1.45;
          transition: opacity 0.2s ease;
        }

        .footer-menu a:hover {
          opacity: 0.8;
        }

        .maker-col {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
        }

        .maker-img,
        .este-desktop,
        .este-mobile img {
          display: block;
          max-width: 100%;
          height: auto;
        }

        .contact {
          color: #fff;
          font-size: 13px;
          line-height: 1.55;
          margin-top: 6px;
        }

        .contact p {
          margin: 0;
        }

        .contact a {
          color: #fff;
          text-decoration: underline;
        }

        .muted {
          color: #8d9baa;
        }

        .este-col {
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
        }

        .este-mobile {
          display: none;
        }

        @media (max-width: 1100px) {
          .footer-inner {
            padding-left: 20px;
            padding-right: 20px;
          }

          .top-row,
          .bottom-row {
            grid-template-columns: 1fr;
          }

          .brand-col,
          .social-col,
          .este-col {
            justify-content: flex-start;
          }

          .maker-col {
            flex-wrap: wrap;
          }

          .este-col {
            display: none;
          }

          .este-mobile {
            display: block;
          }
        }

        @media (max-width: 700px) {
          .social-text {
            font-size: 16px;
          }

          .footer-menu a,
          .contact {
            font-size: 14px;
          }
        }
      `}</style>
    </footer>
  );
}