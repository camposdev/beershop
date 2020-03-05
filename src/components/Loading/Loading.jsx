import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { StyledLoading } from './styled';

const Loading = (props) => (
  <StyledLoading {...props}>
    <FontAwesomeIcon icon={faSpinner} spin />
  </StyledLoading>
);

Loading.propTypes = {
  fullscreen: PropTypes.bool
};

Loading.defaultProps = {
  fullscreen: false
};

export default Loading;
