import React from 'react';
import { useSelector } from 'react-redux';
import Books from './Shared/Books';

const DisplayBooks = () => {
  const selectedBooks = useSelector((state) => state.books);
  return (
    selectedBooks.books.map((book) => (
      <Books key={book.id} id={book.id} title={book.title} author={book.author} />
    ))
  );
};

export default DisplayBooks;
