import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FetchBooksAsync } from '../redux/features/BooksSlice';
import Books from './Shared/Books';

const DisplayBooks = () => {
  const booksArr = [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchBooksAsync());
  }, []);

  const fetchedBooks = useSelector((state) => state.fetchBooks);
  const selectedBooks = fetchedBooks.books;

  const booksObj = Object.keys(selectedBooks);
  booksObj.forEach((book) => {
    selectedBooks[book].forEach((i) => {
      booksArr.push({
        ...i,
        id: book,
      });
    });
  });

  return (
    booksArr.map((book) => (
      <Books
        key={book.id}
        id={book.id}
        title={book.title}
        author={book.author}
        category={book.category}
      />
    ))
  );
};

export default DisplayBooks;
