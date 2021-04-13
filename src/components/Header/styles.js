import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  position: fixed;
  background: #fbf7ea;
  z-index: 99;

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
            text-decoration: none;

            list-style: none;
            width: fit-content;
            margin: auto 30px;
            a {
              text-decoration: none;
              font-weight: 300;
              font-size: 20px;
              color: #717171;
              position: relative;
              display: inline-block;
            }
            a:after {
              content: '';
              display: flex;
              height: 2px;
              border-radius: 20px;
              position: absolute;
              background: #c02f11;
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
