import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { AddBooks } from '../redux/features/BooksSlice';
import Button from './Shared/Button';

const AddBook = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    item_id: '',
    title: '',
    author: '',
    category: '',
  });

  const onChange = (e) => {
    setState({
      ...state,
      item_id: uuidv4(),
      [e.target.name]: e.target.value,
      category: 'Action Packed',
    });
  };

  const addNewBook = (e) => {
    e.preventDefault();
    dispatch(AddBooks(state));
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
          value={state.title}
          onChange={onChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Enter Author"
          value={state.author}
          onChange={onChange}
          required
        />
        <Button btnName="add-book" btnValue="Add Book" />
      </form>
    </div>
  );
};

export default AddBook;
