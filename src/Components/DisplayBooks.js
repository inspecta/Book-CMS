import React from 'react';
import Store from '../Store/Store';
import Books from './Shared/Books';

const DisplayBooks = () => (
  Store.map((book) => (
    <Books key={book.id} title={book.title} author={book.author} />
  ))
);

export default DisplayBooks;
