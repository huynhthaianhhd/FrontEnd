import styled from 'styled-components';
import Layout from 'app/components/Layout';
const { Content, Header, Footer } = Layout;

export const StyledLayout = styled(Layout)`
  width: 100%;
  min-height: 100vh;
  background: #fff;
`;

export const StyledHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  color: black;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  .logo {
    width: 120px;
    height: 31px;
    background: #fff;
    margin: 16px 24px 16px 0;
    float: left;
  }
  .left {
    flex: 1;
  }
  .category {
    & > * {
      margin: 0px 10px;
      color: black;
      font-weight: 500;
      font-size: 1rem;
      &:hover {
        color: #fb4226;
      }
    }
  }
  .align-center {
    display: flex;
    align-items: center;
  }
  .button {
    outline: none;
    border: none;
  }
`;

export const StyledContent = styled(Content)``;

export const StyledFooter = styled(Footer)`
  text-align: center;
`;
