import styled from 'styled-components';

export const Container = styled.div`
  font-family:"Nunito",sans-serif;
  font-weight:600;
  width:100%;
  height: 100%;
  padding-top:180px;
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
  display: grid;
  grid-gap:50px;
  align-items:center;
  justify-items:center;
  grid-template-columns: repeat(4,1fr);
  .sessao {
    width:100%;
    background-color: #FBF7EA;
      .imagem{
        background-color: #FBF7EA;
        width:200px;
        height:150px;
        max-width:200px;
        img{
          object-fit:contain;
        }

      }

  }

`;
