import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Categories from './Categories';
import Header from './Header';
import AddBook from './AddBook';
import DisplayBooks from './DisplayBooks';

const App = () => (
  <Routes>
    <Route
      path="/"
      element={(
        <>
          <Header />
          <DisplayBooks />
          <AddBook />
        </>
      )}
    />
    <Route path="/categories" element={<Categories />} />
  </Routes>
);

export default App;
