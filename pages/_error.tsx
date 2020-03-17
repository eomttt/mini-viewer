import React from 'react';
import Error from 'next/error';

class MyError extends Error {
  public render(): JSX.Element {
    return (
      <div>
        ERROR PAGE
      </div>
    );
  }
}

export default MyError;
