import styled from 'styled-components';

export const Content = styled.div`
  width:100%;
  height: 100%;
  background-color: #FBF7EA;
  display: grid;
  grid-template-columns: 50% 50%;

  .sessao-1 {
    background-color: #FBF7EA;
    height: 100%;
    .imagens{
      .imagem1{
        background-color: #FBF7EA;
        height: 100%;
        margin: 25% auto auto 8%;
      }
    .imagem2{
      background-color: #FBF7EA;
        height: 100%;
        margin: 3% auto auto 40%;

      }
          }
  }

  .sessao-2 {
    background-color: #FBF7EA;
    height: 100%;
    margin: 25% 15% auto auto;
    .conteudo{
    .sessao-conteudo {
      display: flex;
      flex-direction:column;
      align-items: center;
      justify-content: center;
    }
    .sessao-conteudo h1 {
      font-family:"Nunito",sans-serif;
      font-weight:400;
      font-size: 2.5rem;
      color: #2E2E2E;
      border-bottom: solid 3px #2E2E2E;
      margin-bottom: 8px;
    }
    .sessao-conteudo p {
      font-family:"Rubik",sans-serif;
      font-weight:400;
      font-size: 1.5rem;
      color: #2E2E2E;
      margin-top: 8px;
      padding-left: 1rem;
      justify-content: center;
    }
    .sessao-missão h3 {
      font-family:"Rubik",sans-serif;
      font-weight:500;
      align-items: center;
      margin-bottom: 8px;
      font-size: 2rem;
      color: #2E2E2E;
      padding-left: 16rem;
      margin: 13% auto auto 8%;
    }
    .sessao-missão p {
      font-family:"Rubik",sans-serif;
      font-weight:400;
      justify-content: center;
      font-size: 1.5rem;
      margin-top: 8px;
      color: #2E2E2E;
      padding-left: 1rem;
    }
  }
  }




`;
