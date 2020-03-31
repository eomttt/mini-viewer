import axios from 'axios';

export const fetchGetBooks = async () => {
  try {
    const res = await axios.get('/books');
    const { data, status } = res;
    if (status === 200) {
      const { books } = data;
      return [...books];
    }
  } catch (error) {
    console.error('Error', error);
  }

  return [];
};

export const fetchGetBook = async (fileName) => {
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

  return {};
};
