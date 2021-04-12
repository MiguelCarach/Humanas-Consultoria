import React from 'react';
import { Header, Content } from './styles';

export default function Serviço2() {
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
        <section class="sessao-1" id="serviço2">
          <div class="imagens">
            <div class="imagem1">
              <img src={require("../../assets/Servico_2.png")} alt="1" width="590" height="340" />
            </div>
          </div>
        </section>

        <section class="sessao-2" id="serviço2">
          <div class="conteudo">
            <div class="sessao-conteudo">
              <h1>Treinamentos Personalizados</h1>
              <p>Nosso treinamento personalizado é formulado de forma a se adequar às
              particularidades do negócio. O empreendimento responsável pela montagem
              da capacitação realiza reuniões com o cliente para elaborar um planejamento
              de curso que esteja adequado aos traços distintos das operações da companhia.
              Os treinamentos personalizados se diferenciam dos padronizados, que
              trazem um conteúdo programático igual para toda organização. Com cursos
              elaborados segundo os moldes do empreendimento, fica mais fácil atender às
              necessidades de aprimoramento na corporação tendo como vantagens:
            </p>
              <nav>
                <ul>
                  <li>Adaptação às necessidades da empresa.</li>
                  <li>Conteúdo focado e exclusivo.</li>
                  <li>Melhoria da performance da equipe.</li>
                </ul>
              </nav>
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
