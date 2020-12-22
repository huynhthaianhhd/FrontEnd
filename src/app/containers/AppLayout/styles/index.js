import styled from 'styled-components';
import Layout from 'app/components/Layout';
const { Content, Header, Footer } = Layout;

export const StyledLayout = styled(Layout)`
  width: 100%;
  height: 100vh;
`;

export const StyledHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 24px 16px 0;
    float: left;
  }
  .left {
    flex: 1;
  }
`;

export const StyledContent = styled(Content)`
  padding: 50px;
`;

export const StyledFooter = styled(Footer)`
  text-align: center;
`;
