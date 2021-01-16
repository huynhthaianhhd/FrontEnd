import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledCouchList = styled.div`
  .seats {
    margin-bottom: 20px;
  }
`;

export const StyledRow = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
`;

export const VerticalRow = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 12px;
  }
`;

export const Couch = styled(FontAwesomeIcon)`
  margin: 7px 5px;
  cursor: pointer;
  font-size: ${({ size }) => (size ? `${size}px` : '30px')};
  ${({ status, row }) => {
    switch (status) {
      case 'AVAILABLE': {
        if (row >= 'C' && row <= 'D')
          return css`
            color: #edb73f;
            &:hover {
              color: #a23e51;
            }
          `;
        return css`
          color: #42505c;
          &:hover {
            color: #a23e51;
          }
        `;
      }
      case 'PICKED': {
        return css`
          color: #69bc41;
        `;
      }
      case 'UNAVAILABLE': {
        return css`
          color: #d4d4d4;
          pointer-events: none;
        `;
      }
      default: {
        return;
      }
    }
  }}
  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
    `};
`;
