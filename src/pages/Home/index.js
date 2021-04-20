import React from 'react';
import { Content, Container, Footer } from './styles';
import { Helmet } from 'react-helmet';

import logo from '../../assets/Logo.svg';

import Header from '../../components/Header';

import Sobre from '../Sobre';
import Clientes from '../Clientes';
import Serviços from '../Serviços';
import Contato from '../Contato';
import Button from '../../components/Button';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Humanas Consultoria! Gestão Desenvolvimento  Solução em Ponta Grossa - PR
        </title>
      </Helmet>
      <Header />
      <Content>
        <div className="banner">
          <h3>Gestão</h3>
          <h4>Desenvolvimento</h4>
          <h3>Solução</h3>
          <a href="#sobre">
            <Button>Saiba mais</Button>
          </a>
        </div>
      </Content>
      <Container>
        <img src={logo} width="115%" alt="Humanas Consultoria!" />
      </Container>
      <Sobre />
      <Clientes />
      <Serviços />
      <Contato />
      <Footer>
        <span>Humanas Consultoria ® Todos os direitos reservados.</span>
      </Footer>
    </>
  );
};
