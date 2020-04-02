import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';

import { fetchUploadEpub } from '../../lib/fetch';

const Container = styled.div`
  width: 95%;
  margin-top: 5em;
  margin-bottom: 5em;
  text-align: right;
`;

const UploadBook = () => {
  const [isUploading, setIsUploading] = useState(false);
  const fileRef = useRef(null);

  const setFile = useCallback(async (e) => {
    e.preventDefault();

    if (isUploading) {
      alert('파일을 업로드 중입니다.');
    }

    if (fileRef) {
      setIsUploading(true);

      const { current } = fileRef;
      const data = new FormData();
      data.append('file', current.files[0]);
      data.append('filename', current.files[0].name);
      const res = await fetchUploadEpub(data);

      if (res) {
        setIsUploading(false);
        alert('업로드에 성공했습니다.');
      } else {
        alert('업로드에 실패하였습니다.');
      }
    }
  }, [isUploading]);

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
