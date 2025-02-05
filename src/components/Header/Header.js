import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">
            <NavText>Sale</NavText>
            <NavTextBold>Sale</NavTextBold>
          </NavLink>
          <NavLink href="/new">
            <NavText>New&nbsp;Releases</NavText>
            <NavTextBold>New&nbsp;Releases</NavTextBold>
          </NavLink>
          <NavLink href="/men">
            <NavText>Men</NavText>
            <NavTextBold>Men</NavTextBold>
          </NavLink>
          <NavLink href="/women">
            <NavText>Women</NavText>
            <NavTextBold>Women</NavTextBold>
          </NavLink>
          <NavLink href="/kids">
            <NavText>Kids</NavText>
            <NavTextBold>Kids</NavTextBold>
          </NavLink>
          <NavLink href="/collections">
            <NavText>Collections</NavText>
            <NavTextBold>Collections</NavTextBold>
          </NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLink = styled.a`
  position: relative;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const NavText = styled.span`
  display: block;

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    backface-visibility: hidden;
    transform: rotateX(0deg);
    transform-origin: center top;
    transition: transform 300ms;
    transition-delay: 100ms;
    will-change: transform;

    ${NavLink}:hover &,
    ${NavLink}:focus & {
      transform: rotateX(-90deg);
      transition: transform 200ms;
    }
  }
`;

const NavTextBold = styled(NavText)`
  position: absolute;
  top: 0;
  left: 0;

  font-weight: ${WEIGHTS.bold};

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    transform: rotateX(90deg);
    transform-origin: center bottom;
    transition: transform 300ms;

    ${NavLink}:hover &,
    ${NavLink}:focus & {
      transform: rotateX(0deg);
      transition: transform 200ms;
      transition-delay: 50ms;
    }
  }
`;

export default Header;
