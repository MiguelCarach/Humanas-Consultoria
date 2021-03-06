import styled from 'styled-components';

export const Content = styled.div`
  width:100%;
  height: 100%;
  background-color: #FBF7EA;
  display: grid;
  grid-template-columns: 35% 65%;

  .sessao-1 {
    background-color: #FBF7EA;
    height: 100%;
    .imagens{
      .imagem1{
        background-color: #FBF7EA;
        height: 100%;
        margin: 48% auto auto 28%;
      }
          }
  }

  .sessao-2 {
    background-color: #FBF7EA;
    height: 100%;
    .conteudo{
    .sessao-conteudo {
      display: flex;
      flex-direction:column;
      align-items: center;
      justify-content: center;
    }
    .sessao-conteudo h1 {
      font-family:"Nunito",sans-serif;
      font-weight:600;
      margin: 14% auto auto -1%;
      font-size: 2.5rem;
      color: #2E2E2E;
      border-bottom: solid 3px #2E2E2E;
      margin-bottom: 15px;
    }
    .sessao-conteudo p {
      font-family:"Rubik",sans-serif;
      font-weight:400;
      font-size: 1.5rem;
      margin: 12% auto auto -1%;
      color: #2E2E2E;
      padding-right: 20rem;

    }
    .sessao-HumanasConsultoria h3 {
      font-family:"Rubik",sans-serif;
      font-weight:400;
      align-items: center;
      font-size: 1rem;
      color: #2E2E2E;
      padding-right: 20rem;
      margin: 28% auto auto 4%;
    }

  }
  }




`;
