import React from 'react';
import Text from '../common/Text';

import { C } from './styles';
import { Logo } from '../../assets/svg/logo';

const Navigation = () => {
  return (
    <C.Container>
      <C.Content className="container">
        <C.NavList>
          <C.LogoArea>
            <a href="#">
              <Logo />
            </a>
          </C.LogoArea>
          <C.LinksArea>
            <Text tag="li" variant="paragraphText">
              Sobre mim
            </Text>
            <Text tag="li" variant="paragraphText">
              Contato
            </Text>
          </C.LinksArea>
        </C.NavList>
      </C.Content>
    </C.Container>
  );
};

export default Navigation;
