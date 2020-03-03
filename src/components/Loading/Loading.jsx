import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { StyledLoading } from './styled';

export default (props) => (
  <StyledLoading {...props}>
    <FontAwesomeIcon icon={faSpinner} spin />
  </StyledLoading>
);
