import styled from 'styled-components';

export const StyledNewsSummary = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledBox = styled.div`
  cursor: pointer;
  width: 50%;
  padding: 10px;
  .thumbnail {
    border-radius: 4px;
    height: 250px;
  }
  .title {
    font-size: 15px;
    font-weight: 550;
    text-transform: uppercase;
    margin-top: 10px;
    transition: ease 0.3s;
    &:hover {
      color: #fb4226;
    }
  }
  .description {
    color: #4a4a4a;
    font-size: 14px;
  }
`;
