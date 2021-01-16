import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { StyledPictureInPicture } from './styles';

const PictureInPicture = memo(function PictureInPicture(props) {
  const { isMinimize, children } = props;
  return (
    <StyledPictureInPicture className={!!isMinimize ? 'minimize' : ''}>
      {children}
    </StyledPictureInPicture>
  );
});

PictureInPicture.propTypes = {
  isMinimize: PropTypes.bool,
  children: PropTypes.any,
};

export default PictureInPicture;
