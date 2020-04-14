import React, { useCallback, useRef, useState } from 'react';

import { subTransparentColor } from '../../styles';
import * as Styled from '../../styles/books';

import { fetchUploadEpub } from '../../lib/fetch';

import { UploadBookProps } from '../../interfaces/books/props';

import Loading from '../common/Loading';

const UploadBook: React.FunctionComponent<UploadBookProps> = ({
  bookListItem,
  refetchBookList,
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const isExistBook = useCallback((fileName: string): boolean => {
    const [name] = fileName.split('.');
    let isExist = false;

    bookListItem.some((item) => {
      if (item.fileName === name) {
        isExist = true;
        return true;
      }
      return false;
    });

    return isExist;
  }, [bookListItem]);

  const uploadFile = useCallback(async (files: FileList): Promise<void> => {
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
      refetchBookList();
      setIsUploading(false);
    } else {
      alert('업로드에 실패했습니다. 잠시 후 다시 시도해주세요.');
    }
  }, [isExistBook]);

  const setFile = useCallback((e: React.FormEvent<HTMLFormElement>) => {
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
    <>
      {
      isUploading && (
      <Loading
        text="책을 추가하고 있습니다..."
        backgroundColor={subTransparentColor}
      />
      )
    }
      <Styled.UploadBookContainer>
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
      </Styled.UploadBookContainer>
    </>
  );
};

export default UploadBook;
