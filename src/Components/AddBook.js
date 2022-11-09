import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookToStore } from '../redux/books/books';
import Button from './Shared/Button';

const AddBook = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    id: '',
    title: '',
    author: '',
  });

  const onChange = (e) => {
    setState({
      ...state,
      id: uuidv4(),
      [e.target.name]: e.target.value,
    });
  };

  const addNewBook = (e) => {
    e.preventDefault();
    dispatch(addBookToStore(state));
    setState({
      id: '',
      title: '',
      author: '',
    });
  };

  return (
    <div className="add-book">
      <form onSubmit={addNewBook}>
        <input
          type="text"
          name="title"
          placeholder="Enter Book Title"
          onChange={onChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Enter Author"
          onChange={onChange}
          required
        />
        <Button btnName="add-book" btnValue="Add Book" />
      </form>
    </div>
  );
};

export default AddBook;
