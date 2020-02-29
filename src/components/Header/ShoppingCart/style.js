import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { theme, ifProp } from 'styled-tools';
import { rem } from 'polished';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  position: relative;
  z-index: ${ifProp('isOpen', '8', 'inherit')};
  border-radius: 50%;
  transition: ${theme('transition')};
  &:hover {
    box-shadow: 0 10px 15px -10px ${theme('palette.secondary.100')};
  }
`;

export const IconCart = styled(FontAwesomeIcon)`
  font-size: ${rem(20)};
`;

export const Count = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${theme('palette.white')};
  border: 2px solid ${theme('palette.secondary.300')};
  padding: 1px 5px;
  border-radius: 10px;
  font-size: ${rem(12)};
  font-weight: bold;
  color: ${theme('palette.secondary.300')};
  transition: ${theme('transition')};
`;

export const StyledCart = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${theme('palette.primary.300')};
  color: ${theme('palette.white')};
  cursor: pointer;
  transition: ${theme('transition')};

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    border-radius: 50%;
    background: linear-gradient(to right,transparent, ${theme('palette.secondary.300')});
    transition: ${theme('transition')};
  }

  &:hover {
    &::after {
      opacity: 0;
    }

    ${Count} {
      border-color: ${theme('palette.primary.300')};
      color: ${theme('palette.primary.300')};
    }
  }
`;

const slideIn = keyframes`
  0% {
    opacity: 0;
    margin-top: 5px;
  }
  100% {
    opacity: 1;
    margin-top: 10px;
  }
`;

export const DropdownCart = styled.div`
  position: absolute;
  z-index: -1;
  top: 100%;
  right: 0;
  margin-top: 10px;
  padding: 10px 0 0;
  min-width: 200px;
  background-color: ${theme('palette.white')};
  border-radius: 8px;
  box-shadow: 0 3px 12px rgba(0,0,0,0.2);
  animation: 0.3s ${slideIn} ease-out;
`;

export const ItemCart = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border-top: 1px solid ${theme('palette.dark.50')};

  &:first-of-type {
    border-top: 0;
  }
`;

export const ItemCartPhoto = styled.div`
  margin-right: 5px;
  width: 40px;
  height: 40px;
  background-color: ${theme('palette.dark.50')};
  border-radius: 4px;

  img {
    border-radius: 4px;
  }
`;

export const ItemCartTitle = styled.h4`
  font-size: ${rem(12)};
  font-weight: bold;
  margin: 0;
`;

export const ItemCartPrice = styled.span`
  font-size: ${rem(12)};
  color: ${theme('palette.primary.300')};
`;

export const CartLink = styled(Link)`
  position: relative;
  z-index: 1;
  display: block;
  background: ${theme('palette.primary.300')};
  color: white;
  text-align: center;
  font-size: ${rem(12)};
  font-weight: bold;
  text-decoration: none;
  padding: 10px 0;
  border-radius: 0 0 8px 8px;
  transition: ${theme('transition')};

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    background: linear-gradient(to right,transparent, ${theme('palette.secondary.300')});
    border-radius: 0 0 8px 8px;
    transition: ${theme('transition')};
  }

  &:hover {
    &::after {
      width: 0%;
      opacity: 0;
    }
  }
`;
