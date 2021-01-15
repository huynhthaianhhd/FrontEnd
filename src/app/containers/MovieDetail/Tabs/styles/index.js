import styled from 'styled-components';
import { Tabs } from 'antd';

export const StyledTab = styled(Tabs)`
  background: #ffffff;
  padding-top: 20px;
  .about {
    padding: 32px 0px;
    padding-left: 50px;
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
  }
  .header-title {
    font-size: 24px;
    font-weight: bold;
    line-height: 1.17;
  }
  .about-comments {
    .ant-comment-content-author {
      display: flex;
      align-items: center;
    }
    .time-rating {
      display: flex;
    }
  }
`;
