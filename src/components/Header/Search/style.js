import styled from 'styled-components';
import { rem } from 'polished';
import { theme, ifProp } from 'styled-tools';

export const SearchTrigger = styled.button`
  margin-right: 10px;
  padding: 10px;
  font-size: ${rem(24)};
  color: ${theme('palette.primary.300')};
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  ${theme('breakpoint.md')} {
    display: none;
  }
`;

export const Search = styled.form`
  position: fixed;
  z-index: 9;
  top: ${ifProp('isOpen', '0', '-100%')};
  left: 0;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  opacity: ${ifProp('isOpen', '1', '0')};;
  transition: ${theme('transition')};
  
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 0;
    background: linear-gradient(to right, ${theme('palette.primary.300')}, ${theme('palette.secondary.300')});
    box-shadow: ${ifProp('isFocused', '0 10px 15px -10px', '0 0 0 0')} ${theme('palette.secondary.100')};
    transition: ${theme('transition')};
  }

  ${theme('breakpoint.md')} {
    position: relative;
    height: 40px;
    border-radius: 20px;
    width: ${ifProp('isFocused', '400px', '300px')};
    padding: 0;
    opacity: 1;
    margin-right: 20px;
    &::after {
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      top: -2px;
      left: -2px;
      border-radius: 22px;
    }
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  padding: 0 20px;
  border: none;
  background: ${theme('palette.white')};
  outline: none;
  color: ${theme('palette.dark.300')};

  ${theme('breakpoint.sm')} {
    align-self: stretch;
    
  }

  &::placeholder {
    color: ${theme('palette.dark.100')};
  }
`;

export const SearchIconButton = styled.button`
  font-size: ${rem(24)};
  color: ${theme('palette.white')};
  padding: 8px;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
`;
