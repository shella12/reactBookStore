import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { PropTypes } from 'prop-types';
import { addBook } from '../../redux/books/books';

const NewBook = (props) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  // const [category, setCategory] = useState('');
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
    // setCategory('');
  };
  // const changeColor = (e) => {
  //   e.target.style.color = '#000';
  //   setCategory(e.target.value);
  // };
  return (
    <div>
      <form>
        <input className="input-text" type="text" value={title} placeholder="title" onChange={(e) => setTitle(e.target.value)} />
        <input className="input-text" type="text" value={author} placeholder="author" onChange={(e) => setAuthor(e.target.value)} />
        {/* eslint-disable-next-line react/jsx-curly-brace-presence */}
        {/* <select
          defaultValue="DEFAULT"
          className="input-select"
          name="categories"
          id="categories"
          onChange={(e) => changeColor(e)}
        >
          <option value="DEFAULT" disabled>Category</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Romance">Romance</option>
          <option value="Drama">Drama</option>
          <option value="Fiction">Fiction</option>
          <option value="Mystery">Mystery</option>
          <option value="Biography">Biography</option>
          <option value="Autobiography">Autobiography</option>
          <option value="Comedy">Comedy</option>
          <option value="Horror">Horror</option>
          <option value="Thriler">Thriler</option>
        </select> */}
        <button className="submitBtn" type="submit" onClick={(e) => submitHandler(e)}>Submit</button>
      </form>
    </div>
  );
};

NewBook.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
export default NewBook;
