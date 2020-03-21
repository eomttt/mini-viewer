import React from 'react';

import styled from 'styled-components';

import ViewerNcx from './ViewerNcx';
import ViewerSetting from './ViewerSetting';

import { EpubNcxItem } from '../../interfaces/books';

import { titleFontSize, subColor } from '../../styles';
import { ViewerMenuStyle } from '../../styles/viewer';

const Container = styled.div`
  ${ViewerMenuStyle}
  top: 0;
  border-bottom: 1px solid ${subColor};
`;

const Titles = styled.div`
  white-space: nowrap;
  vertical-align: top;
  margin: auto auto auto 5em;
  & div {
    display: inline-block;
    font-size: ${titleFontSize};
  }
`;

const HeaderNcx = styled.div`
  margin: auto 5em auto auto;
`;

const HeaderSetting = styled.div`
  margin: auto 5em auto 0;
`;

interface Props {
  titles: string[];
  ncxItem: EpubNcxItem;
}

const ViewerHeader: React.FunctionComponent<Props> = ({ titles, ncxItem }) => (
  <Container>
    <Titles>
      {
          titles.map((title) => (
            <div key={title}>{title}</div>
          ))
        }
    </Titles>
    <HeaderNcx>
      <ViewerNcx ncxItem={ncxItem} />
    </HeaderNcx>
    <HeaderSetting>
      <ViewerSetting />
    </HeaderSetting>
  </Container>
);

export default ViewerHeader;
