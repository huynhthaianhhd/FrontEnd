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
      justify-content: center;
      margin: 20px;
    }
  }
`;

export const StyledHelper = styled.div`
  width: 60%;
  min-height: 80px;
  background-color: white;
  border-radius: 5px;
  position: absolute;
  transform: translate(0, -50%);
  z-index: 100;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-around;
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
  padding: 10px;
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
