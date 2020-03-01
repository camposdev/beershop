import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faBeer, faBox, faWineBottle, faTags, faUser } from '@fortawesome/free-solid-svg-icons';
import {
  NavBar,
  NavContainer,
  Nav,
  NavItem,
  ButtonCloseMenu,
  AccountMenu,
  IconCloseMenu,
  ButtonMobileMenu
} from './styled';

export default () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);
  const buttonMenuRef = useRef(null);

  useEffect(() => {
    const listenClose = (e) => {
      if (!menuRef.current.contains(e.target) && !buttonMenuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener('click', listenClose);
    return () => {
      document.removeEventListener('click', listenClose);
    };
  }, []);

  return (
    <NavBar>
      <NavContainer>
        <Nav open={openMenu} ref={menuRef}>
          <ButtonCloseMenu onClick={() => setOpenMenu(false)}>
            Fechar <IconCloseMenu icon={faTimes} />
          </ButtonCloseMenu>
          <NavItem to="/beer" onClick={() => setOpenMenu(false)}>
            <FontAwesomeIcon icon={faBeer} /> Cervejas
          </NavItem>
          <NavItem to="/kits" onClick={() => setOpenMenu(false)}>
            <FontAwesomeIcon icon={faBox} /> Kits
          </NavItem>
          <NavItem to="/accessories" onClick={() => setOpenMenu(false)}>
            <FontAwesomeIcon icon={faWineBottle} /> Acessórios
          </NavItem>
          <NavItem to="/sale" onClick={() => setOpenMenu(false)}>
            <FontAwesomeIcon icon={faTags} /> Promoções
          </NavItem>
        </Nav>

        <ButtonMobileMenu ref={buttonMenuRef} onClick={() => setOpenMenu(true)}>
          <FontAwesomeIcon icon={faBars} /> Menu
        </ButtonMobileMenu>

        <AccountMenu to="/account">
          Minha conta <FontAwesomeIcon icon={faUser} />
        </AccountMenu>
      </NavContainer>
    </NavBar>
  );
};
