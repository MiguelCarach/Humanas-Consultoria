import React from 'react';
import { Content } from './styles';

export default function Clientes() {
  return (
    <>
      <Content>
        <section class="sessao-1" id="clientes">
          <div class="imagens">
            <div class="imagem1">
              <img src={require("../../assets/Logo_Boticario.png")} alt="1" />
            </div>
            <div class="imagem2">
              <img src={require("../../assets/Logo_Transardo.png")} alt="2" />
            </div>
          </div>
        </section>

        <section class="sessao-2" id="clientes">
          <div class="imagens">
            <div class="imagem1">
              <img src={require("../../assets/Logo_Rainha.png")} alt="1" />
            </div>
            <div class="imagem2">
              <img src={require("../../assets/Logo_Vital.png")} alt="2" />
            </div>
          </div>
        </section>

        <section class="sessao-3" id="clientes">
          <div class="imagens">
            <div class="imagem1">
              <img src={require("../../assets/Logo_Palladium.png")} alt="1" />
            </div>
            <div class="imagem2">
              <img src={require("../../assets/Logo_Velocenter.png")} alt="2" />
            </div>
          </div>
        </section>

        <section class="sessao-4" id="clientes">
          <div class="imagens">
            <div class="imagem1">
              <img src={require("../../assets/Logo_Tratornew.png")} alt="1" />
            </div>
            <div class="imagem2">
              <img src={require("../../assets/Logo_SerraVerde.png")} alt="2" />
            </div>
          </div>
        </section>
      </Content>

    </>
  );
}
