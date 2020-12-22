import styled from 'styled-components';
import { COLOR } from 'styles/colorPalette';

export const StyledRegister = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;

  .register-form {
    width: 300px;
    display: flex;
    flex-direction: column;

    &-title {
      align-self: center;
      margin-bottom: 24px;
    }

    &-button {
      margin-bottom: 10px;
      button {
        width: 100%;
      }

      &-local {
        padding-bottom: 25px;
        margin-bottom: 25px;
        border-bottom: solid 1px ${COLOR.GRAY};
      }
    }

    &-login {
      align-self: center;
    }
  }
`;
