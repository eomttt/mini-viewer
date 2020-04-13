import styled from 'styled-components';
import { subColor } from '..';

export const BookListCancelIcon = styled.img`
  width: 1.5em;
  box-shadow: none;
  position: absolute;
  top: -3%;
  right: -6%;
  display: none;
`;

export const BookListCover = styled.li`
  width: 10em;
  display: inline-block;
  margin: 1em;
  vertical-align: bottom;
  cursor: grab;
  padding: 0;
  position: relative;
  & div {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
  }

  &:hover ${BookListCancelIcon} {
    display: initial;
  }
`;

export const BookListCoverImage = styled.img`
  width: 100%;
  user-select: none;
  box-shadow: 1px 1px 5px ${subColor};
`;

export const NoBookListContainer = styled.div`
  width: 100%;
  margin-top: 10em;
  margin-bottom: 5em;
  text-align: center;
  font-size: 2em;
`;

export const UploadBookContainer = styled.div`
  width: 95%;
  margin-top: 5em;
  margin-bottom: 5em;
  text-align: right;
`;
