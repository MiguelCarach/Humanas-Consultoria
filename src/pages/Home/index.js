import React from 'react';
import { Content, Container, Footer } from './styles';
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

// import logo from '../../assets/Logo.svg';

import Header from '../../components/Header';

import Sobre from '../../components/Sobre';
import Clientes from '../../components/Clientes';
import Serviços from '../../components/Serviços';
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
          <Link to="#sobre">
            <Button>Saiba mais</Button>
          </Link>
        </div>
      </Content>
      <Container>
        {/* <img src={logo} width="115%" alt="Humanas Consultoria!" /> */}
      </Container>
      <Sobre />
      <Clientes />
      {/* <Serviços /> */}
      <Contato />
      <Footer>
        <span>Humanas Consultoria ® Todos os direitos reservados.</span>
      </Footer>
    </>
  );
}
