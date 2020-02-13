import React from 'react';

import { Link } from '@gabrieluizramos/preferences/components';

import * as S from './styles';

import Button from './language/button';

const content = {
  pt: (
    <>
      <p>
          Às vezes eu programo (e você pode acompanhar meus <Link href="https://github.com/gabrieluizramos/" target="_blank">códigos</Link>, algumas <Link href="https://www.behance.net/gabrieluizramos" target="_blank">telas</Link> e algumas <Link href="http://codepen.io/gabrieluizramos/" target="_blank">brincadeiras</Link> que desenvolvi), <Link href="/blog">escrevo</Link> e tiro algumas <Link href="https://www.instagram.com/gabrieluizramos/" target="_blank">fotos</Link>.
      </p>
      <p>
          Caso queira, você pode entrar em contato comigo por <Link href="mailto:gabriel.luiz.ramos@gmail.com">e-mail</Link> ou também saber um pouco mais sobre minha <Link href="https://www.linkedin.com/in/gabrieluizramos/" target="_blank">experiência profissional</Link>.
      </p>
    </>
  ),
  en: (
    <>
      <p>
          Sometimes I build things (and you can check some <Link href="https://github.com/gabrieluizramos/" target="_blank">codes</Link>, <Link href="https://www.behance.net/gabrieluizramos" target="_blank">screens</Link> and <Link href="http://codepen.io/gabrieluizramos/" target="_blank">funny stuff</Link> that I've built), <Link href="/blog">write</Link> (currently in portuguese only) and shoot some <Link href="https://www.instagram.com/gabrieluizramos/" target="_blank">pictures</Link>.
      </p>
      <p>
          If you want, you can <Link href="mailto:gabriel.luiz.ramos@gmail.com">e-mail me</Link> and also check my <Link href="https://www.linkedin.com/in/gabrieluizramos/" target="_blank">professional experience</Link>.
      </p>
    </>
  )
}

const Content = ({ lang = 'pt' }) => (
  <S.Content>
    <Button lang={lang} />
    {content[lang]}
  </S.Content>
);

export default Content;



