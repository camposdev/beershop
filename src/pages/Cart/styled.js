import styled from 'styled-components';
import { rem } from 'polished';
import { theme, ifProp } from 'styled-tools';
import Button from '../../components/Button';

export const CardCart = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  padding: 10px 10px 50px;
  border-radius: 8px;
  box-shadow: 0 2px 5px ${theme('palette.dark.100')};
  transition: ${theme('transition')};

  &:hover {
    box-shadow: 0 4px 8px ${theme('palette.dark.100')};
  }

  h5 {
    font-size: ${rem(10)};
    text-transform: uppercase;
    line-height: 1;
    margin: 0 0 5px;
    font-weight: normal;
    color: ${theme('palette.dark.200')};
  }

  ${theme('breakpoint.sm')} {
    padding: 10px;
    align-items: center;
    flex-direction: row;
    box-shadow: 0 2px 5px ${theme('palette.dark.50')};
  }
`;

export const CardCartPhoto = styled.div`
  flex-shrink: 0;
  align-self: center;
  margin-bottom: 15px;

  img {
    width: 100%;
    max-width: 100px;
  }

  ${theme('breakpoint.sm')} {
    margin: 0;
  }
`;

export const CardCartInfo = styled.div`
  ${theme('breakpoint.sm')} {
    flex: 1;
    margin: 0 15px;
  }
`;

export const CardCartTitle = styled.div`
  font-size: ${rem(18)};
  font-weight: bold;
  margin: 0 0 10px;
`;

export const CardCartQtd = styled.div`
  ${theme('breakpoint.md')} {
    margin-right: 15px;
  }
`;

export const CardCartPrices = styled.div`
  display: flex;
  justify-content: space-between;

  ${theme('breakpoint.md')} {
    justify-content: flex-start;
  }
`;

export const CardCartValue = styled.div`
  font-size: ${rem(18)};
  font-weight: bold;
  color: ${ifProp('secondary', theme('palette.dark.200'), theme('palette.primary.300'))};

  ${theme('breakpoint.md')} {
    margin: 0 15px;
  }
`;

export const CardCartAction = styled(Button)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-radius: 0 0 8px 8px;

  &::after {
    border-radius: 0 0 8px 8px;
  }

  ${theme('breakpoint.sm')} {
    position: relative;
    width: 40px;
    border-radius: 30px;
    left: inherit;
    bottom: inherit;
    margin-right: 15px;
    
    &::after {
      border-radius: 30px;
    }
  }
`;

export const TotalCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 100%;
  }

  ${theme('breakpoint.sm')} {
    flex-direction: row;
    justify-content: flex-end;

    button {
      width: auto;
    }
  }
`;

export const TotalPrice = styled.div`
  font-size: ${rem(26)};
  font-weight: bold;
  color: ${theme('palette.primary.300')};
  margin-bottom: 20px;

  ${theme('breakpoint.sm')} {
    margin: 0 20px 0 0;
  }
`;
