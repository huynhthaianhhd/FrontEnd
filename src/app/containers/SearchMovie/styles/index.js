import styled from 'styled-components';

export const StyledHome = styled.div`
  .list {
    & > * {
      width: 50%;
    }
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  height: 100%;
`;

export const StyledSection = styled.div`
  width: 100%;
  position: relative !important;
  padding-bottom: 20px;
  margin-bottom: 20px;
  img {
    height: 100%;
    width: 100%;
  }
  .img {
    width: 100%;
  }
  .dropdown {
    border: none;
    outline: none;
  }
  .button {
    border-radius: 5px;
  }
  .container {
    max-width: 940px;
    float: none;
    margin: auto;
    clear: both;
    display: flex;
    flex-direction: column;
    .main {
      display: flex;
      flex-wrap: wrap;
    }
    .header {
      display: flex;
      width: 100%;
      justify-content: flex-start;
      margin: 20px;
    }
  }
`;

export const StyledMovie = styled.div`
  width: 25%;
  margin-bottom: 20px;
  .film {
    position: relative;
    padding: 5px;
    display: flex;
    flex-direction: column;
    .rate {
      position: absolute;
      text-align: center;
    }
  }
`;

export const StyledListMovie = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  position: relative;
  border: 1px solid #c2c2c2;
  .ant-tabs-nav {
    width: 15%;
  }
  .ant-tabs {
    width: 100%;
  }
  .list {
    width: 100% !important;
    color: black;
  }
  .ant-spin-nested-loading {
    width: 100%;
  }
`;
