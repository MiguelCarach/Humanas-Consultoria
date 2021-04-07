import React from 'react';
import { Content } from './styles';

export default function Serviço4() {
  return (
    <>
          <Content>
            <h3>Consultoria Jurídica</h3>
            <img src ={require("../../assets/Servico_5.png")} alt="Servico_5" />
              <p>Temos como objetivo aconselhar o cliente em relação às práticas que podem
                 ser aplicadas para identificar e resolver problemas ou melhorar as operações do negócio.
              </p>
              <p>O foco de nossa consultoria se baseia no Direito do Trabalho preventivo nas
                empresas, visando evitar demandas trabalhistas futuras através de orientações comportamentais atuais.
              </p>
          </Content>
    </>
  );
}
