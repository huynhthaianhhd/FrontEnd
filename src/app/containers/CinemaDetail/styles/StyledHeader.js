import styled from 'styled-components';

export const StyledHeader = styled.div`
  height: 75vh;
  width: 100%;
  position: relative;
  overflow: visible;
  img {
    margin-top: -25px;
    margin-right: -10px;
    height: 100%;
    width: 100%;
    filter: blur(15px);
  }
  .img-tiny {
    height: 100%;
    width: 100%;
    z-index: -1;
  }
  .overlay {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    z-index: 10;
    background: transparent;
    height: 100%;
    width: 100%;
    background: linear-gradient(to top, #fff, transparent 100%);
    color: #333333;
    .main {
      width: 940px;
      img {
        filter: blur(0px);
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
      .ant-image {
        height: 100%;
        width: auto;
        margin: 0;
        img {
          margin: 0;
        }
      }
      .layer {
        width: 100%;
        height: 100%;
      }
      .center {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
      }
      .center-end {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        flex-direction: column;
        .white {
          span {
            color: white;
            font-size: 53px;
            line-height: 127px;
          }
        }
        .ant-progress-inner {
          background-color: #474441;
        }
      }
    }
  }
`;
