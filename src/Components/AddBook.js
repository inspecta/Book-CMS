import React from 'react';
import Button from './Shared/Button';

const AddBook = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          placeholder="Enter Book Title"
        />
        <input
          type="text"
          placeholder="Enter Author"
        />
        <Button btnName="category-btn" btnValue="Check Status" />
        <Button btnName="add-book" btnValue="Add Book" />
      </div>
    </form>
  );
};

export default AddBook;
