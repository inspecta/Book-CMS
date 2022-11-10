import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { RemoveBooks } from '../../redux/features/BooksSlice';
import Button from './Button';

const Books = ({
  title, author, id, category,
}) => {
  const dispatch = useDispatch();

  const handleRemoveBook = (id) => {
    dispatch(RemoveBooks(id));
  };

  return (
    <div className="book-container flex">
      <div className="book-details">
        <p className="category">{category}</p>
        <h4 className="book-title">{title}</h4>
        <p className="author">{author}</p>
        <div className="book-methods">
          <Button btnName="btn-comments" btnValue="Comments" />
          <button type="submit" onClick={() => handleRemoveBook(id)}>Remove</button>
          <Button btnName="btn-edit" btnValue="Edit" />
        </div>
      </div>
      <div className="progress-container">
        <div className="circle">
          <p className="percentage">64%</p>
          <p className="status">Completed</p>
        </div>
      </div>
      <div className="current-chapter">
        <h4 className="chapter-title">CURRENT CHAPTER</h4>
        <p className="chapter-no">Chapter 17</p>
        <div className="progress">
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Books;
