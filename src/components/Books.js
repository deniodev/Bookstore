import React from 'react';
import BookItem from './BookItem';
import AddBook from './AddBook';

const data = [
  {
    id: 1,
    title: 'Davinci Code',
    author: 'Dan Brown',
  },
  {
    id: 2,
    title: 'Think and Grow Rich',
    author: 'Napoleon Hill',
  },
  {
    id: 3,
    title: 'Morning Miracle',
    author: 'Hal Elrod',
  },
  {
    id: 4,
    title: 'Rich Dad, Poor Dad',
    author: 'Robert Kiyosaki',
  }];

const Books = () => (
  <div>
    <ul>
      {data.map(((book) => (
        <BookItem key={book.id} title={book.title} author={book.author} />
      )))}
    </ul>
    <AddBook />
  </div>
);

export default Books;
