import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledCouchList = styled.div``;

export const Couch = styled(FontAwesomeIcon)`
  font-size: 30px;
  margin: 7px 5px;
  cursor: pointer;
  ${({ status }) => {
    switch (status) {
      case 'AVAILABLE': {
        return css`
          color: #42505c;
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
`;
