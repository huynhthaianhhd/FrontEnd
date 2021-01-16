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
`;

export const StyledTab = styled.div`
  display: flex;
  position: relative;
  align-items: flex-start;
  max-width: 250px;

  .img-tiny {
    width: 20%;
    margin-right: 10px;
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
  .date {
    font-size: 1.01rem;
  }
  color: ${({ isActive }) => isActive && 'red'};
`;
