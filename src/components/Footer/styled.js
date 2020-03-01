import styled from 'styled-components';
import { theme } from 'styled-tools';

export const StyledFooter = styled.footer`
  margin-top: 80px;
  padding: 40px 0;
  text-align: center;
  background-color: ${theme('palette.dark.50')};
  color: ${theme('palette.dark.200')};
`;
