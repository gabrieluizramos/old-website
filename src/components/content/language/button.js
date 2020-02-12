import React from 'react';

import * as S from './styles';

const text = {
  pt: 'English',
  en: 'Português'
}
const href = {
  pt: '/en',
  en: '/'
}

const Button = ({ lang = 'pt' }) => (
  <S.Language>
    <S.Button href={href[lang]}>{text[lang]}</S.Button>
  </S.Language>
);

export default Button;
