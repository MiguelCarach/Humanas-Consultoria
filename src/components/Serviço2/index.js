import React from 'react';
import {Content } from './styles';

export default function Serviço2() {
  return (
    <>
          <Content>
          <h3>Treinamentos Personalizados</h3>
          <img src ={require("../../assets/Servico_2.png")} alt="Servico_2" />
              <p>Nosso treinamento personalizado é formulado de forma a se adequar às
                 particularidades do negócio. O empreendimento responsável pela montagem
                 da capacitação realiza reuniões com o cliente para elaborar um planejamento
                 de curso que esteja adequado aos traços distintos das operações da companhia.
                 Os treinamentos personalizados se diferenciam dos padronizados, que
                 trazem um conteúdo programático igual para toda organização. Com cursos
                 elaborados segundo os moldes do empreendimento, fica mais fácil atender às
                 necessidades de aprimoramento na corporação tendo como vantagens:
              </p>
              <ul>
                <li>Adaptação às necessidades da empresa.</li>
                <li>Conteúdo focado e exclusivo.</li>
                <li>Melhoria da performance da equipe.</li>
              </ul>
          </Content>
    </>
  );
}
