import React from 'react';
import { Header, Content } from './styles';

export default function Serviço1() {
  return (
    <>
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
      </Header>
      <Content>
        <section class="sessao-1" id="serviço1">
          <div class="imagens">
            <div class="imagem1">
              <img src={require("../../assets/Servico_1.png")} alt="1" width="590" height="340" />
            </div>
          </div>
        </section>

        <section class="sessao-2" id="serviço1">
          <div class="conteudo">
            <div class="sessao-conteudo">
              <h1>Recrutamento e seleção de pessoas</h1>
              <p>Com um processo de recrutamento e seleção bem organizado, com  todas as informações bem definidas,
              o processo torna-se otimizado tendo  mais tempo para realizar as demais etapas do processo,
              como a triagem dos currículos, seleção e análise de candidatos.
            </p>
            </div>
            <div class="sessao-HumanasConsultoria">
              <h3>Humanas Consultoria ® Todos os direitos reservados.</h3>
            </div>
          </div>
        </section>
      </Content>

    </>
  );
}
