import styled from 'styled-components';
import Layout from 'app/components/Layout';
const { Content, Header, Footer } = Layout;

export const StyledLayout = styled(Layout)`
  width: 100%;
  min-height: 100vh;
  background: #fff;
`;

export const StyledHeader = styled(Header)`
  position: fixed;
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  color: black;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  z-index: 10;
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
  margin-top: 50px;
  background-color: #222222;
  color: white;
  .content {
    padding: 20px 0;
    max-width: 1020px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .column {
      display: flex;
      flex-direction: column;
      a,
      span {
        color: #949494;
        transition: ease 0.5s;
        &:hover {
          color: white;
        }
      }
      span.email {
        color: #fb4226;
      }
      img.zion-logo {
        width: 80px;
        border-radius: 8px;
        margin-right: 15px;
      }
      img.bo-cong-thuong {
        width: 130px;
      }
      .title.no-margin {
        margin: 0;
      }
    }
  }

  .content.border {
    border-bottom: 1px solid #4a4a4a;
  }

  .column.full {
    flex: 1;
  }
`;

export const BrandIcon = styled.img`
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-right: 15px;
  margin-bottom: 15px;
  background-color: white;
  border-radius: 50%;
`;
