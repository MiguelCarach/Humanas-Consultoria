import React from 'react';
import { Container, Content } from './styles';

export default function Clientes() {
  return (
    <>
      <Container id="clientes">
        <div class="conteudo">
          <h1>Clientes que já utilizaram nossos serviços</h1>
        </div>
        <Content>
          <section class="sessao">
            <div class="imagem">
              <img src={require("../../assets/Logo_Boticario.png")} alt="1" />
            </div>
            <div class="imagem">
              <img src={require("../../assets/Logo_Transardo.png")} alt="2" />
            </div>
          </section>

          <section class="sessao" >
            <div class="imagem">
              <img src={require("../../assets/Logo_Rainha.png")} alt="1" />
            </div>
            <div class="imagem">
              <img src={require("../../assets/Logo_Vital.png")} alt="2" />
            </div>
          </section>

          <section class="sessao">
            <div class="imagem">
              <img src={require("../../assets/Logo_Palladium.png")} alt="1" />
            </div>
            <div class="imagem">
              <img src={require("../../assets/Logo_Velocenter.png")} alt="2" />
            </div>
          </section>

          <section class="sessao">
            <div class="imagem">
              <img src={require("../../assets/Logo_Tratornew.png")} alt="1" />
            </div>
            <div class="imagem">
              <img src={require("../../assets/Logo_SerraVerde.png")} alt="2" />
            </div>
          </section>
        </Content>
      </Container>
    </>
  );
}
