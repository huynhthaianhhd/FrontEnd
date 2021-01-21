import styled from 'styled-components';
import { IconMoon } from 'app/components/Icon';

import Modal from '../Ant';

export const StyledButtonPIP = styled(IconMoon)`
  color: white;
  position: absolute;
  top: 40px;
  right: 15px;
  cursor: pointer;
  opacity: 0;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
`;

export const StyledButtonClose = styled(IconMoon)`
  color: white;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  font-size: 14px;
  text-shadow: 1px 1px 1px #666666;
`;

export const StyledModalVideo = styled(Modal)`
  .ant-modal-body {
    padding: 0;
  }

  .ant-modal-close-x {
    color: white;
  }

  &:hover {
    ${StyledButtonPIP} {
      opacity: 1;
      text-shadow: 1px 1px 1px #666666;
    }
  }
`;
