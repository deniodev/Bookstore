import React from 'react';
import BookItem from './BookItem';
import AddBook from './AddBook';

const Books = () => (
  <div>
    <ul>
      <BookItem />
    </ul>
    <AddBook />
  </div>
);

export default Books;
