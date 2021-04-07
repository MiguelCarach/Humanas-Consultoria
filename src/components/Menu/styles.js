import styled from "styled-components";

export const Container = styled.header`
  .MenuWeb {
    width: 300px;
    height: calc(100vh - 50px);
    background-color: rgba(0, 0, 0, 0.5);
    .top {
      padding-top: 50px;
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 100px;
        height: 100px;
        object-fit: cover;
      }
      h4 {
        color: #fff;
        font-size: 20px;
      }
    }
    nav {
      margin-top: 50px;
      width: 100%;
      justify-content: center;
      align-items: center;
      position: relative;
      ul {
        width: 100%;
        position: relative;
        li {
          margin: 30px;
          width: 50%;
          justify-content: center;
          align-items: center;
          position: relative;
          img {
            width: 30px;
            height: 30px;
            object-fit: contain;
          }
          a {
            margin-left: 10px;
            color: #fff;
            font-size: 16px;
          }
          a:after {
            content: "";
            display: flex;
            height: 3px;
            border-radius: 20px;
            left: 50%;
            position: absolute;
            background: #fff;
            transition: width 0.3s ease 0s, left 0.3s ease 0s;
            width: 0;
            margin-top: 5px;
          }
          a:hover:after {
            width: 100%;
            left: 0;
          }
        }
      }
    }
    .footer {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 50px auto 0 30px;
      justify-content: center;
      align-items: center;
      position: relative;
      .usuario {
        display: flex;
        width: 100%;
        justify-content: left;
        align-items: center;
        position: relative;
        img {
          width: 20px;
          height: 20px;
          object-fit: contain;
          margin-right: 10px;
        }
        p {
          color: #727272;
          font-weight: bold;
          font-size: 14px;
          margin: unset;
        }
      }
      .logoff {
        display: flex;
        width: 100%;
        justify-content: left;
        align-items: center;
        position: relative;
        margin-top: 20px;
        img {
          width: 20px;
          height: 20px;
          object-fit: contain;
          margin-right: 10px;
        }
        p {
          color: #727272;
          text-transform: uppercase;
          font-weight: bold;
          margin: unset;
          font-size: 14px;
        }
      }
    }
    @media (max-width: 900px) {
      display: none;
    }
  }
  .MenuMobile {
    border-bottom: 1px solid #e3e3e3;
    display: none;
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 120px;
    background: #fff;
    .logo {
      margin: 0 10%;
      padding: 20px 0%;
      display: flex;
      a {
        display: flex;
        width: 100%;
        margin: auto;
        img {
          width: 115px;
          height: 60px;
        }
      }
      .hamburger-react {
        margin: 10px;
        position: fixed;
      }
    }
    .Open {
      transform: translateY(-120%);
      position: fixed;
      opacity: 0;
      @media (max-width: 500px) {
        transform: translateY(300%);
      }
    }
    .Openmobile {
      transform: translateY(0%);
      transition: all ease 0.7s;
      height: auto;
      width: 100%;
      background: #fff;
      padding-bottom: 25px;
      border-bottom: 1px solid #e3e3e3;
      nav > ul {
        display: flex;
        flex-direction: row;
        li {
          flex-direction: column;
          display: flex;
          list-style-type: none;
          margin: auto;
          a {
            font-size: 20px;
            padding: 10px;
            color: #707070;
            opacity: 1;
            text-align: left;
            text-decoration: none;
            letter-spacing: 0px;
            display: inline-block;
            position: relative;
            font-weight: bold;
          }
          a:after {
            content: "";
            display: flex;
            height: 5px;
            border-radius: 50px;
            left: 50%;
            position: absolute;
            background: #eb5454;
            transition: width 0.3s ease 0s, left 0.3s ease 0s;
            width: 0;
          }
        }
        @media (max-width: 600px) {
          flex-direction: column;
        }
      }
    }
    @media (max-width: 900px) {
      display: inherit;
    }
  }
`;
