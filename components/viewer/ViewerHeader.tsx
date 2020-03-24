import React, { useCallback } from 'react';

import styled from 'styled-components';

import ViewerNcx from './ViewerNcx';
import ViewerSetting from './ViewerSetting';

import { EpubNcxItem, EpubAuthor } from '../../interfaces/books';

import { titleFontSize } from '../../styles';
import { ViewerMenu } from '../../styles/viewer';

const Container = styled(ViewerMenu)`
  top: 0;
  font-family: initial;
`;

const Info = styled.div`
  max-width: 50%;
  white-space: nowrap;
  vertical-align: top;
  margin: auto auto auto 7em;
`;

const Title = styled.div`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;
  font-size: ${titleFontSize};
`;

const Author = styled.div`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const HeaderNcx = styled.div`
  margin: auto 7em auto auto;
`;

const HeaderSetting = styled.div`
  margin: auto 7em auto 0;
`;

interface Props {
  titles: string[];
  authors: EpubAuthor[];
  ncxItem: EpubNcxItem;
}

const ViewerHeader: React.FunctionComponent<Props> = ({ titles, authors, ncxItem }) => {
  const getString = useCallback((items) => items.reduce((acc, cur, index) => `${acc}${index > 0 ? ', ' : ''}${cur}`, ''), []);

  return (
    <Container>
      <Info>
        <Title>
          {getString(titles)}
        </Title>
        <Author>
          {getString(authors.map((authorItem) => authorItem.name))}
        </Author>
      </Info>
      <HeaderNcx>
        <ViewerNcx ncxItem={ncxItem} />
      </HeaderNcx>
      <HeaderSetting>
        <ViewerSetting />
      </HeaderSetting>
    </Container>
  );
};

export default ViewerHeader;
