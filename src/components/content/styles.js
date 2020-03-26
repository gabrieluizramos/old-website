import styled from 'styled-components';

import { spacing, font } from '@gabrieluizramos/preferences/variables';

export const Content = styled.section`
  font-size: ${font.size.medium};
  max-width: 550px;
  margin: 0 auto;
  position: relative;
  line-height: 2;
  padding: 0 ${spacing.double};

  p:not(:last-of-type) {
    margin-bottom: ${spacing.double};
  }
`;
