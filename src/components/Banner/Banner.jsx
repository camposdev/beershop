/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import PropTypes from 'prop-types';
import { StyledBanner } from './styled';

const Banner = ({ img, imgMobile, ...props }) => (
  <StyledBanner>
    <picture>
      <source srcSet={img} media="(min-width: 768px)" />
      <img src={imgMobile} {...props} />
    </picture>
  </StyledBanner>
);

Banner.propTypes = {
  img: PropTypes.string.isRequired,
  imgMobile: PropTypes.string.isRequired
};

export default Banner;
