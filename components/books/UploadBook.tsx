import React, { useCallback, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import * as booksActions from '../../reducers/books';

import { fetchGetBookListItem, fetchUploadEpub } from '../../lib/fetch';
import { addLibraryOrder } from '../../lib/localStorage';

import { ReducerStates } from '../../interfaces';
import { BooksState } from '../../interfaces/books';

const Container = styled.div`
  width: 95%;
  margin-top: 5em;
  margin-bottom: 5em;
  text-align: right;
`;

const UploadBook = () => {
  const dispatch = useDispatch();
  const { list }: BooksState = useSelector((state: ReducerStates) => state.books);
  const [isUploading, setIsUploading] = useState(false);
  const fileRef = useRef(null);

  const isExistBook = useCallback((fileName) => {
    const [name] = fileName.split('.');
    let isExist = false;

    list.some((item) => {
      if (item.fileName === name) {
        isExist = true;
        return true;
      }
      return false;
    });

    return isExist;
  }, [list]);

  const addBook = useCallback(async (fileName) => {
    const [name] = fileName.split('.');
    const bookListItem = await fetchGetBookListItem(name);

    if (bookListItem) {
      dispatch(booksActions.addBook(bookListItem));
      addLibraryOrder(bookListItem.fileName);
    }
  }, []);

  const uploadFile = useCallback(async (files) => {
    setIsUploading(true);

    if (isExistBook(files[0].name)) {
      alert('이미 있는 책입니다.');
      return;
    }

    const data = new FormData();
    data.append('file', files[0]);
    data.append('filename', files[0].name);

    const res = await fetchUploadEpub(data);
    if (res) {
      await addBook(res);
      setIsUploading(false);
      alert('업로드에 성공했습니다.');
    } else {
      alert('업로드에 실패했습니다. 잠시 후 다시 시도해주세요.');
    }
  }, [isExistBook]);

  const setFile = useCallback((e) => {
    e.preventDefault();

    if (isUploading) {
      alert('파일을 업로드 중입니다.');
    }

    if (fileRef) {
      const { current } = fileRef;
      if (current.files && current.files.length > 0) {
        uploadFile(current.files);
      } else {
        alert('파일을 선택해 주세요.');
      }
    }
  }, [isUploading, uploadFile]);

  return (
    <Container>
      <div>업로드 할 Epub 파일을 선택해주세요.</div>
      <form encType="multipart/form-data" onSubmit={setFile}>
        <div>
          <input
            className="form-control"
            ref={fileRef}
            type="file"
            accept=".epub"
          />
        </div>

        <button type="submit">
          Upload
        </button>
      </form>
    </Container>
  );
};

export default UploadBook;
