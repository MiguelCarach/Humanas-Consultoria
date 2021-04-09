import styled from 'styled-components';

export const Content = styled.div`
  width:100%;
  height: 100%;
  background-color: #FBF7EA;
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;

  .sessao-1 {
    background-color: #FBF7EA;
    height: 100%;
    .sessao-caixa1 {
      display: flex;
      width: 343px;
      height: 569px;
      margin: 12.8% auto auto 12%;
      flex-direction:column;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      position:absolute;
      background-color:#5D5D5D;
    }
    .sessao-caixa1 h1 {
      margin: 16% auto auto 2%;
      font-size: 2.5rem;
      color: #C02F11;
      border-bottom: solid 3px #C02F11;
      margin-bottom: 15px;
    }
  }
  .sessao-2 {
    .conteudo h1{
      margin: 16% auto auto 32%;
      font-size: 2.5rem;
      color: #2E2E2E;
      border-bottom: solid 3px #2E2E2E;
      margin-bottom: 15px;
    }
    .sessao-caixa2 {
      width: 343px;
      height: 569px;
      display: flex;
      margin: 4% auto auto 6%;
      flex-direction:column;
      align-items: center;
      justify-content: center;
    border-radius: 10px;
    position:absolute;
    background-color:#5D5D5D;
    }
    .sessao-caixa2 h1 {
      margin: 16% auto auto 2%;
      font-size: 2.5rem;
      color: #C02F11;
      border-bottom: solid 3px #C02F11;
      margin-bottom: 15px;
    }
  }
      .sessao-3 {
    .sessao-caixa3 {
      width: 343px;
      height: 569px;
      display: flex;
      margin: 12.8% auto auto 2%;
      flex-direction:column;
      align-items: center;
      justify-content: center;
    border-radius: 10px;
    position:absolute;
    background-color:#5D5D5D;
    }
    .sessao-caixa3 h1 {
      margin: 16% auto auto 2%;
      font-size: 2.5rem;
      color: #C02F11;
      border-bottom: solid 3px #C02F11;
      margin-bottom: 15px;
    }


  }

`;
