import styled from 'styled-components';
import Button from 'app/components/Button';
import { COLOR } from 'styles/colorPalette';

export const StyledGoogleButton = styled(Button)`
  background-color: ${COLOR.GOOGLE};
  color: ${COLOR.WHITE};
  border: none;

  &:hover {
    background-color: ${COLOR.GOOGLE};
    color: ${COLOR.WHITE};
    opacity: 0.8;
  }

  &:focus {
    background-color: ${COLOR.GOOGLE};
    color: ${COLOR.WHITE};
    opacity: 0.8;
  }
`;

export const StyledFacebookButton = styled(Button)`
  background-color: ${COLOR.FACEBOOK};
  color: ${COLOR.WHITE};
  border: none;

  &:hover {
    background-color: ${COLOR.FACEBOOK};
    color: ${COLOR.WHITE};
    opacity: 0.8;
  }

  &:focus {
    background-color: ${COLOR.FACEBOOK};
    color: ${COLOR.WHITE};
    opacity: 0.8;
  }
`;

export const StyledLogin = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;

  .login-form {
    width: 300px;
    display: flex;
    flex-direction: column;

    &-title {
      align-self: center;
      margin-bottom: 24px;
    }

    &-forgot {
      align-self: flex-end;
      margin-bottom: 5px;
      margin-top: -19px;
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

    &-register {
      align-self: center;
    }
  }
`;
