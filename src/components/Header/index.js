import React from 'react';

import { Container } from './styles';

function Header() {
  return (
    <>
     <Container class="menu-principal">
        <div className="MenuWeb">
          <div className="Botao">
            <a href="/" className="Logo">
              <img src={require("../../assets/Logo.png")} alt="Img" layout="fill" />
            </a>
            <nav>
              <ul>
                <li>
                  <a href="/">Inicio</a>
                </li>
                <li>
                  <a href="/#sobre">Sobre</a>
                </li>
                <li>
                  <a href="/#clientes">Clientes</a>
                </li>
                <li>
                  <a href="/#serviços">Serviços</a>
                </li>
                <li>
                  <a href="/#contato">Contato</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Header;
