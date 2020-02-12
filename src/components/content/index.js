import React from 'react';

import * as S from './styles';

import Button from './language/button';

const content = {
  pt: (
    <>
      <p class="description">
          Às vezes eu programo (e você pode acompanhar meus <a href="https://github.com/gabrieluizramos/" target="_blank">códigos</a>, e algumas <a href="https://www.behance.net/gabrieluizramos" target="_blank">telas</a> que desenvolvi), <a href="/blog">escrevo</a> e tiro algumas <a href="https://www.instagram.com/gabrieluizramos/" target="_blank">fotos</a>.
      </p>
      <p class="description">
          Caso queira, você pode entrar em contato comigo por <a href="mailto:gabriel.luiz.ramos@gmail.com">e-mail</a> ou também saber um pouco mais sobre minha <a href="https://www.linkedin.com/in/gabrieluizramos/" target="_blank">experiência profissional</a>.
      </p>
    </>
  ),
  en: (
    <>
      <p class="description">
          Sometimes I build things (and you can check some <a href="https://github.com/gabrieluizramos/" target="_blank">codes</a> and <a href="https://www.behance.net/gabrieluizramos" target="_blank">screens</a> that I've built), <a href="/blog">write</a> (currently in portuguese only) and shot some <a href="https://www.instagram.com/gabrieluizramos/" target="_blank">pictures</a>.
      </p>
      <p class="description">
          If you want, you can <a href="mailto:gabriel.luiz.ramos@gmail.com">e-mail me</a> and also check my <a href="https://www.linkedin.com/in/gabrieluizramos/" target="_blank">professional experience</a>.
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



