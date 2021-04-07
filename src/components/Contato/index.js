import React from 'react';
import { Content } from './styles';

export default function Contato() {
  return (
    <>
          <Content>
            <h1>Sobre</h1>
            <img src ={require("../../assets/1.png")} alt="1" />
            <img src ={require("../../assets/2.png")} alt="2" />
              <p>A Humanas nasceu da identificação da necessidade de
                trabalhar junto ao mundo corporativo, com o objetivo
                de reconhecer a importância do SER HUMANO nas relações
                pessoais e profissionais, a Humanas oferece serviços voltados
                para a descoberta e melhoria dos valores estabelecidos para
                relações interpessoais saudáveis, produtivas, fortalecedoras e
                que possibilitam o crescimento das pessoas.
              </p>
              <h2>Missão:</h2>
              <p>Acompanhar a evolução do mercado de trabalho e os
                 desafios nas relações pessoais para possibilitar aos nossos clientes,
                 através de soluções inovadoras, igual evolução no dia a dia, seja
                 no campo profissional, seja no campo pessoal.
              </p>
          </Content>
    </>
  );
}
