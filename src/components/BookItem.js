import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import Button from './Button';
import { deleteBook } from '../redux/book/booksSlice';

const BookItem = (props) => {
  const {
    id, title, author, category,
  } = props;
  const dispatch = useDispatch();
  return (
    <div>
      <li>
        <h3>
          {title}
        </h3>
        <p>
          {author}
        </p>
        <p className="category">
          {category}
        </p>
        <button
          type="submit"
          onClick={() => dispatch(deleteBook(id))}
        >
          Remove
        </button>
      </li>
    </div>
  );
};

BookItem.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
  id: PropTypes.string,
};
BookItem.defaultProps = {
  title: null,
  author: null,
  category: null,
  id: null,
};

export default BookItem;
