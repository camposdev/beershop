import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Label, StyledInput } from './styled';

const TextField = ({ label, id, ...props }) => (
  <Wrapper>
    {label && <Label htmlFor={id}>{label}</Label>}
    <StyledInput type="text" id={id} {...props} />
  </Wrapper>
);

TextField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string
};

TextField.defaultProps = {
  label: null,
  id: null
};

export default TextField;
