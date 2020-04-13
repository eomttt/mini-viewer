import { BookListItem } from '.';

export interface BookListProps {
  bookListItem: BookListItem[];
  deleteBookListItem: (params: {
    variables: {
      fileName: string;
    };
  }) => void;
}

export interface UploadBookProps {
  bookListItem: BookListItem[];
  refetchBookList: () => void;
}
