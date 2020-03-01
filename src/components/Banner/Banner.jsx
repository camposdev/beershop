/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';
import { StyledBanner } from './styled';

const Banner = ({ img, ...props }) => (
  <StyledBanner>
    <img src={img} {...props} />
  </StyledBanner>
);

Banner.propTypes = {
  img: PropTypes.string.isRequired
};

export default Banner;
