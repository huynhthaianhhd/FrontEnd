import styled, { css } from 'styled-components';

export const StyledMovieDetail = styled.div`
  position: relative;
  height: 100%;
  overflow-y: auto;
  /* padding: 20px;  */
  -webkit-font-smoothing: antialiased;
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 667px !important;
    ${({ background }) =>
      background &&
      css`
        background: url(${background});
        background-repeat: no-repeat;
        filter: blur(18px);
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      `}
  }
  .group-movie-header {
    padding-left: 50px;
    margin: 0 !important;
    .header-rating {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 17px;
      color: #e9e9e9;
      .group-star {
        display: flex;
        margin-top: 10px;
        margin-bottom: 10px;
      }
      .circlePercent {
        position: relative;
        .circleBorder {
          width: 150px;
          height: 150px;
          display: flex;
          justify-content: center;
          border: 7.5px solid rgb(126, 211, 33);
          border-radius: 50%;
          .point {
            font-size: 75px;
            line-height: 140px;
            text-align: center;
            color: #e9e9e9;
          }
        }
      }
    }
    .group-movie-info {
      display: flex;
    }
    .img-poster-main {
      margin-right: 20px;
      img {
        height: 667px;
      }
    }
    .poster-main {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      color: #e9e9e9;
      font-size: 20px;
      .info {
        margin-bottom: 15px;
      }
      .name-movie {
        font-size: 24px;
        color: rgb(255, 255, 255);
        font-size: 36px;
        font-weight: bold;
        line-height: 42px;
      }
      .button-trailer {
        padding: 7px 20px;
        height: unset;
        span {
          font-size: 16px;
        }
      }
    }
  }
`;
