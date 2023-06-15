import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookItem from './BookItem';
import AddBook from './AddBook';
import { getBooks } from '../redux/book/booksSlice';

const Books = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  const allBooks = useSelector((state) => state.books.books);

  return (
    <div>
      <ul>
        {allBooks.map((book) => (
          <BookItem
            key={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
            id={book.id}
          />
        ))}
      </ul>
      <AddBook />
    </div>
  );
};

export default Books;
