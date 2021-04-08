import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow:hidden;
  background-color: #FBF7EA;
`;

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
width: 100%;
background-color: #FBF7EA;
.banner {
  position: absolute;
  top: 30%;
  left: 15%;
}

.banner h3 {
  color: #484848;
  font-size: 3.5rem;
  font-weight: 200;
  line-height: 3.5rem;
  margin-bottom: 2rem;
  animation: moveBanner 1s 0.5s forwards;
}
.banner h4 {
  color: #C02F11;
  font-size: 3.5rem;
  font-weight: 200;
  line-height: 3.5rem;
  margin-bottom: 2rem;
  animation: moveBanner 1s 0.5s forwards;
}


`;
