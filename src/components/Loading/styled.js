import styled from 'styled-components';
import { theme } from 'styled-tools';
import { rem } from 'polished';

export const StyledLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;

  ${({ fullscreen }) => fullscreen && `
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,0.8);
  `}

  svg {
    color: ${theme('palette.primary.300')};
    font-size: ${rem(60)};
  }
`;
