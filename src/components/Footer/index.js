import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/zeeraqhflix_logo.png'

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src={Logo} alt="Logo Zeeraqhflix" />
      </a>
      <p>
        Desenvolvido por Luan durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
