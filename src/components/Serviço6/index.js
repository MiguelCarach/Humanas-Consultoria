import React from 'react';
import Header from '../Header';
import { Content } from './styles';

export default function Serviço6() {
  return (
    <>
      <Header />
      <Content>
        <section class="sessao-1" id="serviço6">
          <div class="imagens">
            <div class="imagem1">
              <img src={require("../../assets/Servico_6.png")} alt="Servico_6" />
            </div>
          </div>
        </section>

        <section class="sessao-2" id="serviço6">
          <div class="conteudo">
            <div class="sessao-conteudo">
              <h1>Assesment</h1>
              <p>Conhecer os colaboradores que estão em sua empresa é fundamental.
              Identificar líderes, utilizar o ponto forte de cada colaborador e suprimir as
              suas fraquezas podem ser os fatores determinantes para ter uma equipe
              de sucesso.
              </p>
            </div>
            <div class="sessao-conteudo1">
              <p>O método faz uso de sistemas, políticas e práticas que vão fornecer uma
              gama de informações necessárias para planejar, produzir, implementar,
              gerenciar, treinar, apoiar e sustentar a força de trabalho de uma empresa.
              E como seu foco é em pessoas, o assessment é capaz de avaliar como elas
              se encaixam no sistema das companhias, como podem ser melhor utilizadas
              e mais produtivas.
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
