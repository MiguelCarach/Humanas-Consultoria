import React from 'react';
import { Content } from './styles';

import { Link } from 'react-router-dom';
import Button from '../../components/Button';

export default function Serviços() {
  return (
    <>

      <Content>
        <section class="sessao-serviços" id="servicos">
          <div id="caixa1">
            <img src={require("../../assets/Servico_1.png")} alt="Servico_1" />
            <h1>Recrutamento e Seleção de pessoas</h1>
            <Link to="/Serviço1">
              <Button>Saiba mais</Button>
            </Link>
          </div>
          <div id="caixa2">
            <img src={require("../../assets/Servico_2.png")} alt="Servico_2" />
            <h1>Treinamentos  personalizados</h1>
            <Link to="/Serviço2">
              <Button>Saiba mais</Button>
            </Link>
          </div>
          <div id="caixa3">
            <img src={require("../../assets/Servico_4.png")} alt="Servico_4" />
            <h1>Saúde Mental na Empresa</h1>
            <Link to="/Serviço3">
              <Button>Saiba mais</Button>
            </Link>
          </div>
        </section>
      </Content>
    </>
  );
}
