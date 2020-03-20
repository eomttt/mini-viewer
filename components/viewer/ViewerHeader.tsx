import React from 'react';

import styled from 'styled-components';

import ViewerNcx from './ViewerNcx';
import ViewerSetting from './ViewerSetting';

import { EpubNcxItem } from '../../interfaces/books';

import { VIEWER_HEIGHT_RATIO } from '../../constants/viewer';

import { subColor, titleFontSize } from '../../styles';

const Container = styled.div`
  width: 100%;
  height: ${(100 - VIEWER_HEIGHT_RATIO) / 2}%;
  position: fixed;
  display: flex;
  top: 0;
  border-bottom: 1px solid ${subColor};
  background-color: white;
  z-index: 5;
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
