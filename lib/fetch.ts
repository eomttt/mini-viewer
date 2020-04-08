import axios from 'axios';
import { EpubBookViewer } from '../interfaces/books';

export const fetchGetBook = async (fileName: string): Promise<EpubBookViewer | null> => {
  try {
    const res = await axios.get(`/book?fileName=${fileName}`);
    const { data, status } = res;
    if (status === 200) {
      const { book } = data;
      return book;
    }
  } catch (error) {
    console.error('Error', error);
  }

  return null;
};

export const fetchUploadEpub = async (file: FormData): Promise<string | null> => {
  try {
    const res = await axios.post('/upload-epub', file);
    const { data, status } = res;
    if (status === 200) {
      const { fileName } = data;
      return fileName;
    }
  } catch (error) {
    console.log('Error', error);
  }

  return null;
};
