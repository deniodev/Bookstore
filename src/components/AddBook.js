import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../redux/book/booksSlice';

const AddBook = () => {
  const [data, setData] = useState({ title: '', author: '' });
  const { books } = useSelector((store) => store.book);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
      item_id: `item${books.length + 1}`,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.title.trim() && data.author.trim()) {
      dispatch(addBook(data));
      setData({ title: '', author: '' });
    }
  };
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Book title"
          name="title"
          value={data.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Book Author"
          name="author"
          value={data.author}
          onChange={handleChange}
        />
        <button
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBook;
