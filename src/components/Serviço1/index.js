import React from 'react';
import {  Content } from './styles';

export default function Serviço1() {
  return (
    <>
          <Content>
          <h3>Recrutamento e seleção de pessoas</h3>
          <img src ={require("../../assets/Servico_1.png")} alt="Servico_1" />
              <p>Com um processo de recrutamento e seleção bem organizado,
                com  todas as informações bem definidas, o processo torna-se otimizado tendo
                mais tempo para realizar as demais etapas do processo,
                como a triagem dos currículos, seleção e análise de candidatos.
              </p>
          </Content>
    </>
  );
}
