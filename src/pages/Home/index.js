import React from 'react';
import { Helmet } from 'react-helmet';

import { Container } from './styles';

import logo from '../../assets/logo.svg';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Agência Ade! Publicidade e Propaganda em Ponta Grossa - PR
        </title>
        <meta
          name="description"
          content="Agência de Publicidade e Propaganda em Ponta Grossa - PR. Criação de marca, campanha, site, impresso, facebook, identidade visual, logo"
        />
        <meta
          name="keywords"
          content="marca, campanha, site, impresso, facebook, identidade visual, logo"
        />
        <meta
          property="og:image"
          content={process.env.PUBLIC_URL + '/screenshot.png'}
        />
      </Helmet>
      <Container>
        <img src={logo} width="200px" alt="Agência Ade!" />
      </Container>
    </>
  );
}
