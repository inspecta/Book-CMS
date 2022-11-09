import React from 'react';
import { useSelector } from 'react-redux';
import Books from './Shared/Books';

const DisplayBooks = () => {
  const selectedBooks = useSelector((state) => state.books);
  return (
    selectedBooks.books.map((book) => (
      <Books key={book.id} title={book.title} author={book.author} id={book.id} />
    ))
  );
};

export default DisplayBooks;
