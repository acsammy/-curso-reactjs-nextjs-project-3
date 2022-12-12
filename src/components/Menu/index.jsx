import P from 'prop-types';
import { Container, MenuContainer, Button } from './styles';
import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import { Menu as MenuIcon, Close } from '@styled-icons/material-outlined';
import { useState } from 'react';

export const Menu = ({ links = [], logoData }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        visible={visible}
        onClick={() => setVisible(true)}
        area-label="Open/Close menu"
      >
        {visible ? (
          <Close area-label="Close menu" />
        ) : (
          <MenuIcon area-label="Open menu" />
        )}
      </Button>
      <Container>
        <SectionContainer visible={visible} onClick={() => setVisible(false)}>
          <MenuContainer>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </MenuContainer>
        </SectionContainer>
      </Container>
    </>
  );
};

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
};
