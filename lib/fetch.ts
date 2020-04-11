import fetch from 'cross-fetch';
import { EpubBookViewer } from '../interfaces/books';

export const fetchGetBook = async (fileName: string): Promise<EpubBookViewer | null> => {
  try {
    const res = await fetch(`/book?fileName=${fileName}`);
    const { status } = res;
    if (status === 200) {
      const { book } = await res.json();
      return book;
    }
  } catch (error) {
    console.error('Error', error);
  }

  return null;
};

export const fetchUploadEpub = async (file: FormData): Promise<string | null> => {
  try {
    const res = await fetch('/upload-epub', {
      method: 'post',
      body: file,
    });
    const { status } = res;
    if (status === 200) {
      const { fileName } = await res.json();
      return fileName;
    }
  } catch (error) {
    console.log('Error', error);
  }

  return null;
};
