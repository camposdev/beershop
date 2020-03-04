import styled from 'styled-components';
import { theme } from 'styled-tools';
import Container from '../Container';

export const StyledHeader = styled.header`
  padding: 30px 0;
  background-color: ${theme('palette.white')};
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderActions = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
