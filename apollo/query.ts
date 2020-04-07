import { gql } from 'apollo-boost';

export const GET_BOOK_LIST_QUERY = gql`
  query {
    bookList {
      fileName
      coverImage
      titles
    }
  }
`;

export const DELETE_BOOKLIST_ITEM = gql`
  mutation DeleteBookListItem($fileName: String!) {
    deleteBookListItem(fileName: $fileName)
  }
`;