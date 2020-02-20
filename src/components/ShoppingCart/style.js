import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { theme } from 'styled-tools';
import { rem } from 'polished';
import { Link } from 'react-router-dom';

export const IconCart = styled(FontAwesomeIcon)`
  font-size: ${rem(20)};
`;

export const Count = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${theme('palette.white')};
  border: 2px solid ${theme('palette.primary.300')};
  padding: 1px 5px;
  border-radius: 10px;
  font-size: ${rem(12)};
  font-weight: bold;
  color: ${theme('palette.primary.300')};
  transition: ${theme('transition')};
`;

export const StyledCart = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin-left: 10px;
  border-radius: 50%;
  background-color: ${theme('palette.primary.300')};
  color: ${theme('palette.white')};
  transition: ${theme('transition')};

  &:hover {
    background-color: ${theme('palette.primary.400')};

    ${Count} {
      border-color: ${theme('palette.primary.400')};
      color: ${theme('palette.primary.400')};
    }
  }
`;
