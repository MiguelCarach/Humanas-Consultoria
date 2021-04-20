import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #fbf7ea;
  img{
    display: flex;
    object-fit: cover;
    object-position: -60px 75px;
  }
`;

export const Content = styled.div`
  width: 100%;
  background-color: #fbf7ea;
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
    color: #c02f11;
    font-size: 3.5rem;
    font-weight: 200;
    line-height: 3.5rem;
    margin-bottom: 2rem;
    animation: moveBanner 1s 0.5s forwards;
  }
`;

export const Footer = styled.footer`
  padding: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
