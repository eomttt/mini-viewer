import React from 'react';
import Error from 'next/error';

import ErrorComponent from '../components/common/Error';

class MyError extends Error {
  public render(): JSX.Element {
    return (
      <ErrorComponent text="페이지를 찾을 수 없습니다." />
    );
  }
}

export default MyError;
