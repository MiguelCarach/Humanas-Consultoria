import React from 'react';
import { Content } from './styles';

import { Link } from 'react-router-dom';
import Button from '../../components/Button';

export default function Serviços() {
  return (
    <>

      <Content>
        <section class="sessao-1" id="serviços">
          <div class="sessao-caixa1">
            <img src={require("../../assets/Servico_1.png")} alt="Servico_1" width="420" height="300" />
            <h1>Recrutamento e Seleção de pessoas</h1>
            <Link to="/Serviço1">
              <Button>Saiba mais</Button>
            </Link>
          </div>
        </section>
        <section class="sessao-2" id="serviços">
          <div class="conteudo">
            <h1>Serviços</h1>
          </div>
          <div class="sessao-caixa2">
            <img src={require("../../assets/Servico_2.png")} alt="Servico_2" width="300" height="250" />
            <h1>Treinamentos  personalizados</h1>
            <Link to="/Serviço2">
              <Button>Saiba mais</Button>
            </Link>
          </div>
        </section>
        <section class="sessao-3" id="serviços">
          <div class="sessao-caixa3">
            <img src={require("../../assets/Servico_4.png")} alt="Servico_4" width="380" height="280" />
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
