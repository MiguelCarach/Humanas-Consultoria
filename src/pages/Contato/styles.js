import styled from 'styled-components';

export const Container = styled.div`
  background-color: #FBF7EA;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .contact-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      width: 150px;
      font-weight: 600;
      font-size: 2rem;
      padding-bottom: 8px;
      border-bottom: solid 2px #2E2E2E;
    }

    .contact-body {
      padding: 50px;
      width: 90%;
      display: flex;
      align-items: flex-start;
      justify-content: center;

      h3 {
        color: #2E2E2E;
        font-size: 1.8rem;
        margin: 16px 0px;
      }

      .address {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;

        a {
          font-size: 1.2rem;
          text-decoration: none;
          color: #717171;
          line-height: 2rem;
        }
      }

      .form {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        form {
          width: 70%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

          input, textarea {
            width: 100%;
            max-width: 100%;
            margin: 8px 0px;
            padding: 16px;
            background-color: #d9d6cc;
            border: 0;
          }

          textarea {
            height: 200px;
          }

          input::placeholder, textarea::placeholder {
            font-size: 1.152rem;
          }
        }

        span {
          color: red;
        }

        button {
          align-self: flex-end;
          justify-self: flex-end;

          border: 0;
          border-radius: 5px;
          background: #c02f11;
          color: #FBF7EA;
          padding: 8px 32px;
        }
      }
    }
  }
`;
