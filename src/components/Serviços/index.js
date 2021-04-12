import React from 'react';
import { Content, Container } from './styles';
import { Carousel } from 'antd';

import { Link } from 'react-router-dom';
import Button from '../../components/Button';

export default function Serviços() {
  const sliderProps = {
    adaptiveHeight: false,
    dots: true,
    dotPosition: "bottom",
    arrow: true,
    infinite: true,
    focusOnSelect: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 5000,

  };
  return (
    <>
      <Container id="serviços">
        <div class="conteudo">
          <h1>Serviços</h1>
        </div>
        <Carousel {...sliderProps}>
          <Content>
            <section class="sessao" >
              <div class="sessao-caixa">
                <img src={require("../../assets/Servico_1.png")} alt="Servico_1" width="420" height="300" />
                <h1>Recrutamento e Seleção de pessoas</h1>
                <Link to="/Serviço1">
                  <Button>Saiba mais</Button>
                </Link>
              </div>
            </section>
            <section class="sessao" >
              <div class="sessao-caixa">
                <img src={require("../../assets/Servico_2.png")} alt="Servico_2" width="300" height="250" />
                <h1>Treinamentos  personalizados</h1>
                <Link to="/Serviço2">
                  <Button>Saiba mais</Button>
                </Link>
              </div>
            </section>
            <section class="sessao" id="serviços">
              <div class="sessao-caixa">
                <img src={require("../../assets/Servico_4.png")} alt="Servico_4" width="380" height="280" />
                <h1>Saúde Mental na Empresa</h1>
                <Link to="/Serviço3">
                  <Button>Saiba mais</Button>
                </Link>
              </div>
            </section>
          </Content>
        </Carousel>
      </Container>
    </>
  );
}
