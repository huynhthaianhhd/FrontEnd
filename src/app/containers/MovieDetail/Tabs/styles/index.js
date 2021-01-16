import styled from 'styled-components';
import { Tabs } from 'antd';

export const StyledTab = styled(Tabs)`
  background: #ffffff;
  padding-top: 20px;
  .about {
    padding: 32px 0px;
    padding-left: 10%;
    padding-right: 10%;
    display: flex;
    flex-direction: column;
    color: #000000;
    font-size: 16px;
    border-bottom: 1px solid rgb(238, 238, 238);
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
      margin-right: 30px;
      > span {
        text-align: center;
      }
    }
  }
  .about-movie {
    .title-type-info {
      font-weight: bolder;
      width: 150px;
    }
  }
  .header-title {
    font-size: 24px;
    line-height: 1.17;
  }
  .about-comments {
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
  flex-direction: column;
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
