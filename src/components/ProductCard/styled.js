import styled from 'styled-components';
import { theme } from 'styled-tools';
import { rem } from 'polished';

export const Card = styled.div`
  align-self: stretch;
  background-color: ${theme('palette.white')};
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 4px 6px ${theme('palette.dark.50')};
  transition: ${theme('transition')};

  &:hover {
    box-shadow: 0 6px 16px ${theme('palette.dark.100')};
  }

  a {
    text-decoration: none;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 15px;
  box-shadow: 0 12px 10px -15px ${theme('palette.dark.100')};
`;

export const Title = styled.h3`
  font-size: ${rem(20)};
  font-weight: normal;
  text-align: center;
  color: ${theme('palette.dark.300')};
  margin: 0 0 10px;
`;

export const Price = styled.div`
  font-size: ${rem(30)};
  font-weight: bold;
  text-align: center;
  color: ${theme('palette.primary.300')};
  margin: 0 0 15px;
`;
