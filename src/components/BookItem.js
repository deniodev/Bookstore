/* eslint-disable react/prop-types */
import React from 'react';

const BookItem = ({ title, author }) => (
  <div>
    <li>
      <h3>
        {title}
        ,
      </h3>
      <span>
        {author}
      </span>
      <button type="button">Delete</button>
    </li>
  </div>
);

export default BookItem;
