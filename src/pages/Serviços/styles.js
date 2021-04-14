import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 100px;
  font-family:"Nunito",sans-serif;
  font-weight:600;
  width:100%;
  display:flex;
  background-color: #FBF7EA;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-size: 2rem;
    font-weight: 400px;
    justify-content: center;
    background-color: #FBF7EA;
    border-bottom: solid 3px #2E2E2E;
    margin-bottom: 8px;
  }
`;

export const Content = styled.div`
  padding-top: 30px;
  padding-bottom: 100px;
  width:100%;
  background-color: #FBF7EA;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 30px;

  align-items: center;
  justify-items: center;

  .card {
    min-width: 340px;
    width: 70%;
    min-height: 570px;
    height: 90%;
    border-radius: 15px;
    margin: 30px;
    background: #D7D4C9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    img {
      width: 250px;
      height: 250px;
      object-fit: contain;
      object-position: center;
      /* padding-bottom: 16px; */
    }
    .line{
      content:"";
      height:2px;
      width:70%;
      background-color:#C02F11;
    }

    h1 {
      font-size: 1.5rem;
      color: #C02F11;
      margin: 8px 0px;
      text-align: center;

    }

    a {
      text-decoration: none;
    }
  }

`;
