import React from 'react';
import Header from '../Header';
import { Content } from './styles';

export default function Serviço5() {
  return (
    <>
      <Header />
      <Content>
        <section class="sessao-1" id="serviço5">
          <div class="imagens">
            <div class="imagem1">
              <img src={require("../../assets/Servico_5.png")} alt="Servico_5" />
            </div>
          </div>
        </section>

        <section class="sessao-2" id="serviço5">
          <div class="conteudo">
            <div class="sessao-conteudo">
              <h1>Avaliação Comportamental</h1>
              <p>A avaliação comportamental é uma análise dos comportamentos dos
              indivíduos, estudando as características presentes em cada um de nós
              e a forma como reagimos a estímulos e agimos diante das mais variadas
              situações. Dessa forma, a análise comportamental se torna importante
              para alcançar metas e resultados, modificar padrões prejudiciais e melhorar
              a qualidade de vida.
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
