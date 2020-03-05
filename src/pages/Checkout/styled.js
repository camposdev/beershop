import styled from 'styled-components';
import { theme } from 'styled-tools';
import { rem } from 'polished';
import Button from '../../components/Button';

export const CheckoutGrid = styled.div`
  display: flex;
  flex-direction: column;

  ${theme('breakpoint.md')} {
    flex-direction: row;
    align-self: flex-start;
  }
`;

export const CheckoutForm = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CheckoutAside = styled.aside`
  margin-top: 50px;
  padding-top: 20px;
  box-shadow: 0 -20px 25px -20px ${theme('palette.dark.50')};

  ${theme('breakpoint.md')} {
    margin: 0 0 0 50px;
    width: 250px;
    flex-shrink: 0;
    padding: 0 0 0 20px;
    box-shadow: -20px 0 25px -20px ${theme('palette.dark.50')};
  }

  ${theme('breakpoint.lg')} {
    width: 300px;
    padding-left: 30px;
    margin-left: 100px;
  }
`;

export const PayButton = styled(Button)`
  width: 100%;

  ${theme('breakpoint.md')} {
    align-self: flex-end;
    width: auto;
  }
`;

export const InlineForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${theme('breakpoint.md')} {
    flex-direction: row;
    > * {
      margin-left: 10px;
      margin-right: 10px;

      &:first-of-type {
        margin-left: 0;
      }
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
`;

export const CheckoutTotal = styled.div`
  margin: 20px 0;
  font-size: ${rem(16)};
  font-weight: bold;
  color: ${theme('palette.primary.300')};
`;

export const LinkDemo = styled.button`
  align-self: flex-start;
  border: 0;
  padding: 1px 6px;
  font-size: ${rem(10)};
  color: ${theme('palette.dark.100')};
  background: ${theme('palette.dark.50')};
  border-radius: 10px;
  outline: none;
  margin-bottom: 15px;
  cursor: pointer;
`;
