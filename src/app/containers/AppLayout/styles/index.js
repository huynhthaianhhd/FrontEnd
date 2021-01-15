import styled from 'styled-components';
import Layout from 'app/components/Layout';
const { Content, Header, Footer } = Layout;

export const StyledLayout = styled(Layout)`
  width: 100%;
  min-height: 100vh;
`;

export const StyledHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

export const StyledContent = styled(Content)``;

export const StyledFooter = styled(Footer)`
  text-align: center;
`;
