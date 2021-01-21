import styled from 'styled-components';

export const Container = styled.div`
  max-width: 940px;
  float: none;
  margin: auto;
  clear: both;
  display: flex;
  flex-direction: column;
`;
export const StyledSection = styled.div`
  width: 100%;
  position: relative !important;
  padding-bottom: 20px;
  margin-top: 30px;
  .ant-tabs-tab {
    margin: 0 16px;
  }
`;

export const StyledTab = styled.div`
  display: flex;
  position: relative;
  align-items: flex-start;
  max-width: 260px;

  .img-tiny {
    width: 20%;
    margin-right: 10px;
    min-width: 50px;
  }
  .content {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    & > p {
      color: #646464;
    }
  }
`;

export const StyleTimeTab = styled.div`
  display: flex;
  width: 100%;
  /* overflow-x: scroll; */
  position: relative;
`;

export const StyledDateTab = styled.div`
  width: calc(100% / 7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 20px;
  .date {
    font-size: 1.03rem;
  }
  color: ${({ isActive }) => isActive && 'red'};
`;

export const StyledMovieDetail = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  .content {
    display: flex;
    flex-direction: column;
    .title {
      font-weight: 550;
      font-size: 1rem;
    }
    .sub-title {
      font-size: 0.8rem;
      color: #646464;
    }
  }
  .img-tiny {
    width: 10%;
    margin-right: 10px;
  }
  & > * {
    margin: 20px;
  }
`;

export const StyledMovieList = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 450px;
`;

export const StyledTime = styled.div`
  width: calc(23% - 10px);
  float: left;
  font-family: 'SF Medium';
  font-size: 16px;
  font-weight: 400;
  margin: 0 10px 10px 0;
  padding: 8px;
  transition: all 0.2s;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: rgba(246, 246, 246, 0.5);
  border-radius: 7px;
  color: #9b9b9b;
  border: 1px solid #e4e4e4;
  letter-spacing: -0.12px;
  cursor: pointer;
  .time {
    font-size: 1.1rem;
    font-weight: 600;
    color: #108f3e !important;
    letter-spacing: -0.16px;
  }
  & > a {
    display: flex;
    align-items: center;
    color: #9b9b9b;
    & > * {
      margin-right: 5px;
    }
  }
`;

export const StyledListTime = styled.div`
  display: flex;
  & > * {
    margin-right: 10px;
  }
`;
