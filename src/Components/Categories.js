import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkBookStatus } from '../redux/categories/categories';
import Header from './Header';

const Categories = () => {
  const selectedCategory = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleCheckStatus = () => {
    dispatch(checkBookStatus());
  };

  return (
    <>
      <Header />
      <div className="book-categories">
        <h2>Categories!</h2>
        <h3>{selectedCategory.categories[0]}</h3>
        <button type="submit" className="catergory-btn" onClick={() => handleCheckStatus()}>Check Status</button>
      </div>
    </>
  );
};

export default Categories;
