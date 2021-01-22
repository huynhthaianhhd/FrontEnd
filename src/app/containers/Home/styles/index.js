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
  &.first-section {
    padding-top: 0;
  }
  padding-top: 65px;
  width: 100%;
  position: relative !important;
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
    padding: 0px 10px;
    width: 30%;
    .ant-select-selector {
      border: none;
    }
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
    .header {
      display: flex;
      width: 100%;
      justify-content: center;
      margin: 20px;
      .title {
        font-size: 28px;
        color: #fa5238;
        margin-bottom: 0;
      }
    }
    .main {
      display: flex;
      flex-wrap: wrap;
    }
    .block {
      display: flex !important;
      flex-wrap: wrap;
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
  padding: 20px;
`;

export const StyledMovie = styled.div`
  width: 25%;
  margin-bottom: 20px;
  position: relative;
  .film {
    position: relative;
    padding: 5px;
    display: flex;
    flex-direction: column;
    .poster-group {
      position: relative;
      .poster {
        height: 318px;
        img {
          border-radius: 4px;
        }
      }
      .overlay {
        cursor: default;
        z-index: 11;
        display: none;
        border-radius: 4px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 318px;
        background-image: linear-gradient(
          to top,
          rgb(0, 0, 0),
          transparent 100%
        );

        .play-icon {
          cursor: pointer;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 30px;
          width: 60px;
          height: 60px;
          border: solid 1px white;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0.8;
          &:hover {
            opacity: 1;
          }
        }
      }
    }
    .title-group {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 71px;
      .name-time {
        .title {
          font-weight: 500;
          margin: 0;
        }
        .duration {
          font-size: 13px;
        }
      }
    }
    .tag {
      font-weight: bold;
    }
    .rate {
      position: absolute;
      z-index: 10;
      font-size: 16px;
      background-color: rgba(12, 27, 54, 0.8);
      border: 1px solid #1f2e46;
      border-radius: 4px;
      padding: 2px;
      top: 12px;
      right: 12px;
      color: #fff;
      text-align: center;
      line-height: 1.1;
      text-align: center;
      .stars {
        display: flex;
        .ant-rate-star {
          margin: 0 1px;
          svg {
            width: 10px;
          }
        }
      }
    }
    .button-buy {
      cursor: pointer;
      display: none;
      border: none;
      background: linear-gradient(to left, #fb4226, #ce3017 100%);
      width: 100%;
      font-size: 16px;
      padding: 10px;
      color: white;
      border-radius: 4px;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
    }

    &:hover {
      cursor: pointer;
      .name-time {
        display: none;
      }
      .button-buy,
      .overlay {
        display: block;
      }
    }
  }
`;

export const StyledListMovie = styled.div`
  display: flex;
  width: 100%;
  /* min-height: 85vh; */
  position: relative;
  border: 1px solid #c2c2c2;
  .ant-tabs-nav {
    padding: 10px;
    width: 15%;
  }
  .ant-tabs {
    width: 100%;
  }
  .list {
    width: 100% !important;
    max-height: 550px;
    color: black;
    overflow-y: scroll;
    padding-bottom: 10px;
  }
  .ant-spin-nested-loading {
    width: 100%;
  }
  .ant-list-items {
    & > * {
      padding: 20px 20px 10px 0px;
    }
  }
`;
