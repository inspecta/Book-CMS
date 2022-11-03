import React from "react";
import PropTypes from 'prop-types';
import Button from "./Button";

const Books = ({ title, author }) => {
  return (
    <div className="book-container">
      <div className="book-details">
        <p className="category">Action</p>
        <h4 className="book-title">{title}</h4>
        <p className="author">{author}</p>
        <div className="book-methods">
          <Button btnName="btn-comments" btnValue="Comments" />
          <Button btnName="btn-remove" btnValue="Remove" />
          <Button btnName="btn-edit" btnValue="Edit" />
        </div>
      </div>
      <div className="progress-container">
        <div className="circle"></div>
        <p className="percentage">64%</p>
        <p className="status">Completed</p>
      </div>
      <div className="current-chapter">
        <h4 className="chapter-title">CURRENT CHAPTER</h4>
        <p className="chapter-no">Chapter 17</p>
        <div className="progress"></div>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}

export default Books;
