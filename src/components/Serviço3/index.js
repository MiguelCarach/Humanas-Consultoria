import React from 'react';
import { Content } from './styles';

export default function Serviço3() {
  return (
    <>
          <Content>
          <h3>Saúde mental na empresa</h3>
          <img src ={require("../../assets/Servico_4.png")} alt="Servico_4" />
              <p>Um programa de Saúde Mental na empresa serve para orientar os
                 colaboradores e ajudá-los a enfrentar a grande pressão do trabalho,
                 desassociando das relações pessoais. Ajuda a diminuir a incidência
                 de doenças e, consequentemente, melhora o relacionamento, faz com
                 que a equipe trabalhe de forma mais integrada e engaja os profissionais.
                 Falar abertamente sobre saúde mental não apenas é importante para os
                 colaboradores, como também para a empresa! Um colaborador feliz e
                 saudável mentalmente é mais propenso a prosperar na vida pessoal e no
                 trabalho, desempenhando suas funções com qualidade e ótima relação com a equipe.
              </p>
          </Content>
    </>
  );
}
