import styled, { keyframes } from 'styled-components';
import { rem } from 'polished';
import { theme } from 'styled-tools';

const showIn = keyframes`
  0% {
    opacity: 0;
    margin-top: 20px;
  }
  100% {
    opacity: 1;
    margin-top: 0;
  }
`;

export const ThankBox = styled.div`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${theme('palette.primary.300')};

  svg {
    font-size: ${rem(100)};
    margin-bottom: 30px;
    animation: 1s ${showIn} ease-out;
  }

  h2 {
    font-size: ${rem(25)};
    text-align: center;
    margin: 0;
    animation: 1s ${showIn} ease-out;
  }
`;

export const Table = styled.table`
  width: 100%;
  border: 1px solid ${theme('palette.dark.50')};
  border-radius: 8px;
  border-spacing: 0;
  margin-bottom: 30px;
  th {
    padding: 10px 15px;
    text-transform: uppercase;
    font-size: ${rem(12)};
    color: ${theme('palette.dark.200')};
    border-bottom: 1px solid ${theme('palette.dark.50')};
    background: ${theme('palette.dark.50')};
    &:first-child {
      border-radius: 8px 0 0 0;
    }
    &:last-child {
      border-radius: 0 8px 0 0;
    }
  }
  td {
    padding: 10px 15px;
    border-bottom: 1px solid ${theme('palette.dark.50')};
  }
  tbody > tr {
    &:last-of-type {
      td {
        border: 0;
      }
    }
  }
  tfoot td {
    border-top: 1px solid ${theme('palette.dark.50')};
    border-bottom: 0;
  }
`;
