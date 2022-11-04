import React from 'react';
import Button from './Shared/Button';

const AddBook = () => (
  <div className="add-book">
    <form>
      <input
        type="text"
        name="title"
        placeholder="Enter Book Title"
        required
      />
      <input
        type="text"
        name="author"
        placeholder="Enter Author"
        required
      />
      <Button btnName="add-book" btnValue="Add Book" />
    </form>
  </div>
);

export default AddBook;
