import React from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';

const StyledContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  
  ${theme('breakpoint.sm')} {
    width: 540px;
    padding: 0;
  }

  ${theme('breakpoint.md')} {
    width: 720px;
  }

  ${theme('breakpoint.lg')} {
    width: 960px;
  }

  ${theme('breakpoint.xl')} {
    width: 1140px;
  }
`;

const Container = (props) => <StyledContainer {...props} />;

export default Container;
