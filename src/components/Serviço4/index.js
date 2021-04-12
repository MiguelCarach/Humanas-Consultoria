import React from 'react';
import { Header, Content } from './styles';

export default function Serviço4() {
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
        <section class="sessao-1" id="serviço4">
          <div class="imagens">
            <div class="imagem1">
              <img src={require("../../assets/Servico_5.png")} alt="1" width="500" height="380" />
            </div>
          </div>
        </section>

        <section class="sessao-2" id="serviço4">
          <div class="conteudo">
            <div class="sessao-conteudo">
              <h1>Consultoria Jurídica</h1>
              <p>Temos como objetivo aconselhar o cliente em relação às práticas que podem
              ser aplicadas para identificar e resolver problemas ou melhorar as operações
              do negócio.
              O foco de nossa consultoria se baseia no Direito do Trabalho preventivo nas
              empresas, visando evitar demandas trabalhistas futuras através de orientações
              comportamentais atuais.
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
