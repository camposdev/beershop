import styled from 'styled-components';
import { rem } from 'polished';
import { theme } from 'styled-tools';

export const EmptyState = styled.div`
padding: 50px 0;
text-align: center;
color: ${theme('palette.dark.100')};
h2 {
  font-size: ${rem(80)};
  margin: 0;
}
p {
  margin: 0 0 30px;
}
`;
