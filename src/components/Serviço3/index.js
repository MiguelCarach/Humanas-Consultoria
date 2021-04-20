import React from 'react';
import Header from '../Header';
import { Content } from './styles';

export default function Serviço3() {
  return (
    <>
      <Header />
      <Content>
        <section class="sessao-1" id="serviço3">
          <div class="imagens">
            <div class="imagem1">
              <img src={require("../../assets/Servico_3.png")} alt="Servico_3" />
            </div>
          </div>
        </section>

        <section class="sessao-2" id="serviço3">
          <div class="conteudo">
            <div class="sessao-conteudo">
              <h1>Saúde mental na empresa</h1>
              <p>Um programa de Saúde Mental na empresa serve para orientar os
              colaboradores e ajudá-los a enfrentar a grande pressão do trabalho,
              desassociando das relações pessoais. Ajuda a diminuir a incidência
              de doenças e, consequentemente, melhora o relacionamento, faz com
              que a equipe trabalhe de forma mais integrada e engaja os profissionais.
              Falar abertamente sobre saúde mental não apenas é importante para os
              colaboradores, como também para a empresa! Um colaborador feliz e
              saudável mentalmente é mais propenso a prosperar na vida pessoal e no
              trabalho, desempenhando suas funções com qualidade e ótima relação
              com a equipe
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
};
