import React, { useState, useRef, useEffect } from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  Nav,
  NavItem,
  MobileMenu,
  ButtonCloseMenu,
  IconCloseMenu,
  ButtonMobileMenu
} from './style';

export default () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);
  const buttonMenuRef = useRef(null);

  const listenClose = (e) => {
    if (!menuRef.current.contains(e.target) && !buttonMenuRef.current.contains(e.target)) {
      setOpenMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', listenClose);
    return () => {
      document.removeEventListener('click', listenClose);
    };
  }, []);

  return (
    <>
      <Nav open={openMenu} ref={menuRef}>
        <ButtonCloseMenu onClick={() => setOpenMenu(false)}>
          Fechar <IconCloseMenu icon={faTimes} />
        </ButtonCloseMenu>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about">BeerShop</NavItem>
        <NavItem to="/beers">Cervejas</NavItem>
      </Nav>

      <ButtonMobileMenu ref={buttonMenuRef} onClick={() => setOpenMenu(true)}>
        <MobileMenu icon={faBars} />
      </ButtonMobileMenu>
    </>
  );
};
