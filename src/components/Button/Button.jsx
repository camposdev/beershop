import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledButton } from './styled';

const Button = ({ icon, children, ...props }) => (
  <StyledButton {...props} hasChildren={!!children}>
    {icon && <FontAwesomeIcon icon={icon} />} {children}
  </StyledButton>
);

Button.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.object]),
  large: PropTypes.bool,
  block: PropTypes.bool
};

Button.defaultProps = {
  icon: null,
  large: false,
  block: false
};

export default Button;
