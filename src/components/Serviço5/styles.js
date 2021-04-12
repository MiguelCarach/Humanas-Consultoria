import styled from 'styled-components';

export const Header = styled.header`
width: 100%;
position: relative;
background-color: #FBF7EA;
.MenuWeb {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 135px;
  position: fixed;
  .Botao {
    width: 100%;
    height: 100px;
    display: flex;
    .Logo {
      margin-left: 15%;
      width: 200px;
      height: 100px;
      position: relative;
      div {
        img {
          object-fit: contain;
        }
      }
    }
    nav {
      width: 100%;
      height: 100%;
      ul {
        width: fit-content;
        display: flex;
        position: relative;
        margin: auto 15% auto auto;
        justify-content: right;
        height: 100%;
        align-items: center;
        li {
          list-style: none;
          width: fit-content;
          margin: auto 30px;
          a {
            font-weight: 300;
            font-size: 20px;
            color: #717171;
            position: relative;
            display: inline-block;
          }
          a:after {
            content: "";
            display: flex;
            height: 2px;
            border-radius: 20px;
            position: absolute;
            background: #C02F11;
            transition: width 0.3s ease 0s, left 0.3s ease 0s;
            width: 0;
          }
          a:hover:after {
            width: 100%;
            left: 0;
          }
        }
      }
    }
  }
  @media (max-width: 900px) {
    display: none;
  }
}
`;

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
        margin: 47% auto auto 44%;
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
      margin: 16% auto auto 2%;
      font-size: 2.5rem;
      color: #2E2E2E;
      border-bottom: solid 3px #2E2E2E;
      margin-bottom: 15px;
    }
    .sessao-conteudo p {
      font-family:"Rubik",sans-serif;
      font-weight:400;
      font-size: 1.5rem;
      margin: 10% auto auto 4%;
      color: #2E2E2E;
      padding-right: 25rem;

    }
    .sessao-HumanasConsultoria h3 {
      font-family:"Rubik",sans-serif;
      font-weight:400;
      align-items: center;
      font-size: 1rem;
      color: #2E2E2E;
      padding-right: 20rem;
      margin: 19.5% auto auto 2%;
    }

  }
  }
  `;
