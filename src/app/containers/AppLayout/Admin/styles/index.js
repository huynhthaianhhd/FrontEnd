import Layout from 'app/components/Layout';
import styled from 'styled-components';
const { Content, Header } = Layout;
export const StyledLayout = styled(Layout)`
  height: 100vh;
  width: 100%;
  .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
  }
`;
export const StyledHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #001529;
`;
export const StyledMain = styled(Layout)`
  position: relative;
  height: 100%;
  width: 100%;
`;
export const StyledContent = styled(Content)`
  position: relative;
  .content {
    height: 100%;
    width: 100%;
    background-color: #fff;
    position: relative;
    * div {
      overflow: auto;
    }
  }
`;
