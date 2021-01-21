import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { StyledIconMoon } from './styled';

export default function IconMoon({ type, className, ...rest }) {
  return (
    <StyledIconMoon className={classNames(`${type}`, className)} {...rest} />
  );
}

IconMoon.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};
