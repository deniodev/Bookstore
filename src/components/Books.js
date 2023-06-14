import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';
import AddBook from './AddBook';

const Books = () => {
  const { books } = useSelector((store) => store.book);
  return (
    <div>
      <ul>
        {books.map(((book) => (
          <BookItem
            key={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
            id={book.item_id}
          />
        )))}
      </ul>
      <AddBook />
    </div>
  );
};

export default Books;
