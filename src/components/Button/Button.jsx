import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledButton } from './styled';

const Button = ({ icon, children, spin, ...props }) => (
  <StyledButton {...props} hasChildren={!!children}>
    {icon && <FontAwesomeIcon icon={icon} spin={spin} />} {children}
  </StyledButton>
);

Button.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.object]),
  large: PropTypes.bool,
  block: PropTypes.bool,
  secondary: PropTypes.bool,
  spin: PropTypes.bool,
};

Button.defaultProps = {
  icon: null,
  large: false,
  block: false,
  secondary: false,
  spin: false
};

export default Button;
