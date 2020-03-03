import styled from 'styled-components';
import { rem } from 'polished';
import { theme } from 'styled-tools';

export const ProductGrid = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0;

  ${theme('breakpoint.md')} {
    flex-direction: row;
  }
`;

export const Photo = styled.div`
  margin: 0 0 15px;
  img {
    width: 100%;
    display: block;
  }

  ${theme('breakpoint.md')} {
    margin: 0 20px 0 0;
    flex: 0 0 50%;
  }

  ${theme('breakpoint.lg')} {
    margin: 0 100px;
    flex: 0 0 40%;
  }
`;

export const ProductInfo = styled.div`
  ${theme('breakpoint.md')} {
    padding-left: 50px;
    box-shadow: -20px 0 25px -20px ${theme('palette.dark.50')};
  }
`;

export const Title = styled.h1`
  font-size: ${rem(28)};
  margin: 0;
`;

export const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  ${theme('breakpoint.md')} {
    margin: 20px 0 30px;
  }
`;

export const Price = styled.div`
  font-size: ${rem(40)};
  font-weight: bold;
  color: ${theme('palette.primary.300')};
`;

export const Installments = styled.div`
  font-size: ${rem(14)};
  color: ${theme('palette.dark.200')};
  span {
    color: ${theme('palette.primary.300')};
  }
`;
