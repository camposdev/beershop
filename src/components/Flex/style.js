import styled from 'styled-components';
import { prop } from 'styled-tools';

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${prop('flow', 'row')};
  justify-content: ${prop('justify', 'flex-start')};
  align-items: ${prop('align', 'flex-start')};
  flex-wrap: ${prop('wrap', 'wrap')};
`;
