import styled from 'styled-components';
import { Tabs } from 'antd';

export const StyledTab = styled(Tabs)`
  background: #ffffff;
  padding-top: 20px;
  .about {
    padding-left: 10%;
    padding-right: 10%;
    display: flex;
    flex-direction: column;
    color: #000000;
    font-size: 16px;
    .content-about {
      padding-top: 16px;
      display: flex;
      flex-direction: column;
      &.group-cast {
        display: flex;
        flex-direction: row;
      }
    }
    .avatar {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 30px;
      > span {
        text-align: center;
        margin-top: 5px;
      }
    }
  }
  .about-movie {
    .title-type-info {
      width: 150px;
    }
  }
  .header-title {
    font-size: 27px;
    line-height: 1.17;
  }
  .about-comments {
    padding-top: 20px;
    .ant-comment-content-author {
      display: flex;
      align-items: center;
    }
    .time-rating {
      display: flex;
      align-items: center;
    }
  }

  .about-showtime {
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    padding-left: 15%;
    padding-right: 15%;
  }
`;

export const StyledTabLeft = styled.div`
  display: flex;
  .img-tiny {
    width: 50px;
  }
  .content {
    align-self: center;
    margin-left: 20px;
  }
`;

export const StyleTimeTab = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
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
  .date {
    font-size: 1.01rem;
  }
  color: ${({ isActive }) => isActive && 'red'};
`;

export const StyledCinemaList = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 20px;
`;

export const StyledTime = styled.div`
  width: calc(23% - 10px);
  float: left;
  font-size: 14px;
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
  .time {
    font-size: 1.1rem;
    font-weight: 600;
    color: #108f3e;
    letter-spacing: -0.16px;
  }
  .divider {
    margin: 0 3px;
  }
`;

export const StyledListTime = styled.div`
  display: flex;
`;

export const StyledCinemaDetail = styled.div`
  display: flex;
  width: 100%;
  .content {
    margin-left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title {
      font-weight: 550;
      margin-bottom: 2px;
      font-size: 1rem;
    }
    .sub-title {
      font-size: 0.8rem;
      color: #646464;
    }
  }
  .img-tiny {
    width: 50px;
  }
  & > * {
    margin: 10px;
  }
`;

export const StyledDivider = styled.div`
  margin: 32px 0;
  width: 100%;
  height: 1px;
  background-color: rgb(238, 238, 238);
`;
