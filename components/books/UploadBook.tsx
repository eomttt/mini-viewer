import React, { useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import * as booksActions from '../../reducers/books';

import { fetchGetBookListItem, fetchUploadEpub } from '../../lib/fetch';
import { addLibraryOrder } from '../../lib/localStorage';

const Container = styled.div`
  width: 95%;
  margin-top: 5em;
  margin-bottom: 5em;
  text-align: right;
`;

const UploadBook = () => {
  const dispatch = useDispatch();
  const [isUploading, setIsUploading] = useState(false);
  const fileRef = useRef(null);

  const addBook = useCallback(async (fileName) => {
    try {
      const [name] = fileName.split('.');
      const bookListItem = await fetchGetBookListItem(name);

      dispatch(booksActions.addBook(bookListItem));
      addLibraryOrder(bookListItem.fileName);
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  const uploadFile = useCallback(async (files) => {
    setIsUploading(true);

    const data = new FormData();
    data.append('file', files[0]);
    data.append('filename', files[0].name);

    try {
      const res = await fetchUploadEpub(data);
      if (res) {
        await addBook(res);
        setIsUploading(false);
        alert('업로드에 성공했습니다.');
      }
    } catch (error) {
      alert('업로드에 실패하였습니다.');
    }
  }, []);

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
