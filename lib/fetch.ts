import axios from 'axios';

import { BookListItem, EpubBookViewer } from '../interfaces/books';

export const fetchGetBookListItems = async (): Promise<BookListItem[]> => {
  try {
    const res = await axios.get('/book-list-items');
    const { data, status } = res;
    if (status === 200) {
      const { bookListItems } = data;
      return bookListItems;
    }
  } catch (error) {
    console.error('Error', error);
    throw new Error(error);
  }

  return [];
};

export const fetchGetBookListItem = async (fileName): Promise<BookListItem> => {
  try {
    const res = await axios.get(`/book-list-item?fileName=${fileName}`);
    const { data, status } = res;
    if (status === 200) {
      const { bookListItem } = data;
      return bookListItem;
    }
  } catch (error) {
    console.error('Error', error);
    throw new Error(error);
  }

  return null;
};

export const fetchGetBook = async (fileName): Promise<EpubBookViewer> => {
  try {
    const res = await axios.get(`/book?fileName=${fileName}`);
    const { data, status } = res;
    if (status === 200) {
      const { book } = data;
      return book;
    }
  } catch (error) {
    console.error('Error', error);
    throw new Error(error);
  }

  return null;
};

export const fetchUploadEpub = async (file): Promise<string> => {
  try {
    const res = await axios.post('/upload-epub', file);
    const { data, status } = res;
    if (status === 200) {
      const { fileName } = data;
      return fileName;
    }
  } catch (error) {
    console.log('Error', error);
    throw new Error(error);
  }

  return null;
};
