import styled from 'styled-components';

export const Container = styled.div`
  font-family:"Nunito",sans-serif;
  font-weight:600;
  width:100%;
  height: 100%;
  display:flex;
  background-color: #FBF7EA;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .conteudo{
    justify-content: center;
    background-color: #FBF7EA;
    border-bottom: solid 3px #2E2E2E;
    margin-bottom: 8px;
  }
`;

export const Content = styled.div`
  width:100%;
  height: 100%;
  background-color: #FBF7EA;
  display: flex;
  align-items: center;
  justify-content: center;
  .sessao {
    width:100%;
    height: 100%;
    background-color: #FBF7EA;
    .sessao-caixa {
      display: flex;
      width: 343px;
      height: 569px;
      /* margin: 12.8% auto auto 12%; */
      flex-direction:column;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      position:absolute;
      background-color:#5D5D5D;
    }
    .sessao-caixa h1 {
      font-family:"Rubik",sans-serif;
      font-weight:400;
      /* margin: 16% auto auto 2%; */
      font-size: 2.5rem;
      color: #C02F11;
      border-bottom: solid 3px #C02F11;
      margin-bottom: 15px;
    }
  }

`;
