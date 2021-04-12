import React from 'react';
import { Header, Content, Container } from './styles';
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

import logo from '../../assets/Logo.svg';

import Sobre from '../../components/Sobre';
import Clientes from '../../components/Clientes';
import Serviços from '../../components/Serviços';
import Contato from '../../components/Contato';
import Button from '../../components/Button';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Humanas Consultoria! Gestão Desenvolvimento  Solução em Ponta Grossa - PR
        </title>

      </Helmet>
      <Header class="menu-principal">
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
                  <a href="#sobre">Sobre</a>
                </li>
                <li>
                  <a href="#clientes">Clientes</a>
                </li>
                <li>
                  <a href="#serviços">Serviços</a>
                </li>
                <li>
                  <a href="#contato">Contato</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Header>
      <Content>
        <div class="banner">
          <h3>Gestão</h3>
          <h4>Desenvolvimento</h4>
          <h3>Solução</h3>
          <Link to="#sobre">
            <Button>Saiba mais</Button>
          </Link>
        </div>
      </Content>
      <Container>
        <img src={logo} width="115%" alt="Humanas Consultoria!" />
      </Container>
      <Sobre></Sobre>
      <Clientes></Clientes>
      <Serviços></Serviços>
      {/* <Contato></Contato> */}
    </>
  );
}
