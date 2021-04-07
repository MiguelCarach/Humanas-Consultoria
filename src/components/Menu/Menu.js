import React, { useState } from "react";
// imports da aplicaçao
import { Container } from "./styles";
import { Spin as Hamburger } from "hamburger-react";

export default function Footer() {
  const [isOpen, setOpen] = useState(false);

  function fechaMenu() {
    setOpen(!isOpen);
  }

  return (
    <>
      <Container>
      <div className="MenuWeb">
          <div className="top">
            <img src={require("../../assets/favicon.png")} alt="LogoIcon" />
            <h4>Humanas Consultoria</h4>
          </div>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/Sobre">Sobre</a>
              </li>
              <li>
                <a href="/Clientes">Clientes</a>
              </li>
              <li>
                <a href="/Serviços">Serviços</a>
              </li>
              <li>
                <a href="/Contato">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="MenuMobile">
          <div className="logo">
            <a href="/" className="Logo">
              <img src={require("../../assets/favicon.png")} alt="LogoIcon" />
            </a>
            <Hamburger
              className="hamburger-react"
              toggled={isOpen}
              toggle={setOpen}
            />
          </div>
          <div className={`Open${isOpen ? "mobile" : ""}`}>
            <div className="Botao">
              <nav>
                <ul>
                  <li>
                    <a href="/painel" onClick={fechaMenu}>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/Sobre" onClick={fechaMenu}>
                      Sobre
                    </a>
                  </li>
                  <li>
                    <a href="/Clientes" onClick={fechaMenu}>
                      Clientes
                    </a>
                  </li>
                  <li>
                    <a href="/Serviços" onClick={fechaMenu}>
                      Serviços
                    </a>
                  </li>
                  <li>
                    <a href="/Contato" onClick={fechaMenu}>
                      Contato
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
