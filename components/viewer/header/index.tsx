import React from 'react';
import { useSelector } from 'react-redux';

import ViewerNcx from './ViewerNcx';
import ViewerSetting from './ViewerSetting';

import * as Styled from '../../../styles/viewer/header';

import { ReducerStates } from '../../../interfaces';
import { EpubBookViewer } from '../../../interfaces/books';
import { ViewerHeaderProps } from '../../../interfaces/viewer/props';

const ViewerHeader: React.FunctionComponent<ViewerHeaderProps> = ({
  menuHeight,
}) => {
  const book: EpubBookViewer | null = useSelector((state: ReducerStates) => state.book);

  return (
    <>
      {
      book && menuHeight > 0
      && (
      <Styled.Container
        height={menuHeight}
      >
        <Styled.HeaderInfo>
          <Styled.HeaderTitle>
            {book.titles}
          </Styled.HeaderTitle>
          <Styled.HeaderAuthor>
            {book.creators}
          </Styled.HeaderAuthor>
        </Styled.HeaderInfo>
        <Styled.HeaderNcx>
          <ViewerNcx ncxItem={book.ncx} />
        </Styled.HeaderNcx>
        <Styled.HeaderSetting>
          <ViewerSetting />
        </Styled.HeaderSetting>
      </Styled.Container>
      )
    }
    </>
  );
};

export default ViewerHeader;
