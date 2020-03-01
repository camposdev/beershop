import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchTrigger, Search, SearchIconButton, SearchInput } from './styled';

export default () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  const handleBlur = () => {
    setTimeout(() => {
      setIsOpen(false);
      setIsFocused(false);
    }, 100);
  };

  const openSearch = () => {
    setIsOpen(true);
    inputRef.current.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <SearchTrigger onClick={openSearch}>
        <FontAwesomeIcon icon={faSearch} />
      </SearchTrigger>
      <Search
        onSubmit={handleSubmit}
        isFocused={isFocused}
        isOpen={isOpen}
      >
        <SearchInput
          ref={inputRef}
          placeholder="Buscar..."
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
        />
        <SearchIconButton>
          <FontAwesomeIcon icon={faSearch} />
        </SearchIconButton>
      </Search>
    </>
  );
};
