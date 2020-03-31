import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

import ViewerNcx from './ViewerNcx';
import ViewerSetting from './ViewerSetting';

import { EpubBookViewer } from '../../interfaces/books';

import { titleFontSize } from '../../styles';
import { ViewerMenu } from '../../styles/viewer';

import { ReducerStates } from '../../interfaces';

const Container = styled(ViewerMenu)`
  height: ${(props) => props.styleProps.height - 10}px;
  top: 0;
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
  menuHeight: number;
}

const ViewerHeader: React.FunctionComponent<Props> = ({
  menuHeight,
}) => {
  const book: EpubBookViewer | null = useSelector((state: ReducerStates) => state.book);
  const getString = useCallback((items) => items.reduce((acc, cur, index) => `${acc}${index > 0 ? ', ' : ''}${cur}`, ''), []);

  return (
    <>
      {
      book && menuHeight > 0
      && (
      <Container
        styleProps={{
          height: menuHeight,
        }}
      >
        <Info>
          <Title>
            {getString(book.titles)}
          </Title>
          <Author>
            {getString(book.creators.map((authorItem) => authorItem.name))}
          </Author>
        </Info>
        <HeaderNcx>
          <ViewerNcx ncxItem={book.ncx} />
        </HeaderNcx>
        <HeaderSetting>
          <ViewerSetting />
        </HeaderSetting>
      </Container>
      )
    }
    </>
  );
};

export default ViewerHeader;
