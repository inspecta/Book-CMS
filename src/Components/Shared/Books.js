import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { RemoveBooks } from '../../redux/features/BooksSlice';
import Button from './Button';

const Books = ({
  title, author, id, category,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="book-container">
        <div className="book-details">
          <p className="category white">{category}</p>
          <h4 className="book-title white">{title}</h4>
          <p className="author white">{author}</p>
          <div className="book-methods flex white">
            <Button btnName="btn-comments white" btnValue="Comments" />
            <div className="seperators" />
            <button type="submit" className="white" onClick={() => { dispatch(RemoveBooks(id)); }}>Remove</button>
            <div className="seperators" />
            <Button btnName="btn-edit white" btnValue="Edit" />
          </div>
        </div>
        <div className="progress-container white">
          <div className="circle">
            <div className="status-completion-container">
              <div className="inner" />
            </div>
            <div className="percent-status">
              <p className="percentage white">64%</p>
              <p className="status white">Completed</p>
            </div>
          </div>
        </div>
        <div className="current-chapter white">
          <h4 className="chapter-title white">CURRENT CHAPTER</h4>
          <p className="chapter-no white">Chapter 17</p>
          <div className="progress white">
            <button type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Books;
