import React from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

import ViewerNcx from './ViewerNcx';
import ViewerSetting from './ViewerSetting';

import { EpubBookViewer } from '../../interfaces/books';

import { titleFontSize } from '../../styles';
import { ViewerMenu } from '../../styles/viewer';

import { ReducerStates } from '../../interfaces';

import { getString } from '../../lib/util';

const Container = styled(ViewerMenu)`
  height: ${(props) => props.styleProps.height - 10}px;
  top: 0;
`;

const Info = styled.div`
  max-width: 50%;
  white-space: nowrap;
  vertical-align: top;
  margin: auto auto auto 5%;
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
  margin: auto 5% auto auto;
`;

const HeaderSetting = styled.div`
  margin: auto 5% auto 0;
`;

interface Props {
  menuHeight: number;
}

const ViewerHeader: React.FunctionComponent<Props> = ({
  menuHeight,
}) => {
  const book: EpubBookViewer | null = useSelector((state: ReducerStates) => state.book);

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
            {book.titles}
          </Title>
          <Author>
            {book.creators}
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
