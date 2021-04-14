import React from 'react';
import { Content, Container } from './styles';
// import { Carousel } from 'antd';


import Button from '../../components/Button';

export default function Serviços() {

  return (
    <>
      <Container id="serviços">
        <span>Serviços</span>
        <Content>

          <div className="card" >
            <img src={require("../../assets/Servico_1.png")} alt="Servico_1" />
            <h1>Recrutamento e Seleção de pessoas</h1>
            <div className="line" />
            <a href="/Serviço1">
              <Button>Saiba mais</Button>
            </a>
          </div>

          <div className="card" >
            <img src={require("../../assets/Servico_2.png")} alt="Servico_2" />
            <h1>Treinamentos  personalizados</h1>
            <div className="line" />
            <a href="/Serviço2">
              <Button>Saiba mais</Button>
            </a>
          </div>

          <div className="card">
            <img src={require("../../assets/Servico_3.png")} alt="Servico_3" />
            <h1>Saúde Mental na Empresa</h1>
            <div className="line" />
            <a href="/Serviço3">
              <Button>Saiba mais</Button>
            </a>
          </div>

          <div className="card" >
            <img src={require("../../assets/Servico_4.png")} alt="Servico_4" />
            <h1>Consultoria Jurídica</h1>
            <div className="line" />
            <a href="/Serviço4">
              <Button>Saiba mais</Button>
            </a>
          </div>

          <div className="card" >
            <img src={require("../../assets/Servico_5.png")} alt="Servico_5" />
            <h1>Avaliação  Comportamental</h1>
            <div className="line" />
            <a href="/Serviço5">
              <Button>Saiba mais</Button>
            </a>
          </div>

          <div className="card">
            <img src={require("../../assets/Servico_6.png")} alt="Servico_6" />
            <h1>Assessment</h1>
            <div className="line" />
            <a href="/Serviço6">
              <Button>Saiba mais</Button>
            </a>
          </div>

        </Content>
      </Container>
    </>
  );
}
