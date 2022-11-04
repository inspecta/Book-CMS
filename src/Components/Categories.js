import React from 'react';
import Header from './Header';
import Button from './Shared/Button';

const Categories = () => (
  <>
    <Header />
    <div className="book-categories">
      <h2>Categories!</h2>
      <Button btnName="category-btn" btnValue="Check Status" />
    </div>
  </>
);

export default Categories;
