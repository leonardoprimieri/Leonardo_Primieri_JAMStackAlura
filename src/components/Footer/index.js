import React from 'react';
import { Twitter } from '../../assets/svg/Twitter';
import { Github } from '../../assets/svg/Github';
import { Medium } from '../../assets/svg/Medium';
import { C } from './styles';

const Footer = () => {
  return (
    <C.Container>
      <C.Socials>
        <a href="https://twitter.com/LeoPrimieri" target="_blank">
          <Twitter />
        </a>
        <a href="https://github.com/leonardoprimieri" target="_blank">
          <Github />
        </a>
        <a href="https://medium.com/@leo.primieri" target="_blank">
          <Medium />
        </a>
      </C.Socials>
    </C.Container>
  );
};

export default Footer;
