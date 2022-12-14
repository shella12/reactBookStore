import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { PropTypes } from 'prop-types';
import { addBook } from '../../redux/books/books';

const NewBook = (props) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const { dispatch } = props;
  const submitHandler = (event) => {
    event.preventDefault();
    const bookObject = {
      item_id: nanoid(),
      title,
      author,
      category: '',
    };
    dispatch(addBook(bookObject));
    setAuthor('');
    setTitle('');
  };
  return (
    <div>
      <form>
        <input className="input-text" type="text" value={title} placeholder="title" onChange={(e) => setTitle(e.target.value)} />
        <input className="input-text" type="text" value={author} placeholder="author" onChange={(e) => setAuthor(e.target.value)} />
        <button className="submitBtn" type="submit" onClick={(e) => submitHandler(e)}>Submit</button>
      </form>
    </div>
  );
};

NewBook.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
export default NewBook;
