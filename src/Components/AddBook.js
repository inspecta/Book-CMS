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
        <h2 className="add-title">ADD NEW BOOK</h2>
        <br />
        <div className="input-group">
          <input
            type="text"
            name="title"
            className="input title"
            placeholder="Enter Title"
            value={state.title}
            onChange={onChange}
            required
          />
          <input
            type="text"
            name="author"
            className="input authorInput"
            placeholder="Enter Author"
            value={state.author}
            onChange={onChange}
            required
          />
          <Button btnName="input add-book-btn" btnValue="Add Book" />
        </div>
      </form>
    </div>
  );
};

export default AddBook;
