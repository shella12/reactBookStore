import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../redux/books/books';
import BookList from './BookList';
import NewBook from './NewBook';

const Books = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.booksReducer.status);
  const postBooks = useSelector((state) => state.booksReducer.books);
  const error = useSelector((state) => state.booksReducer.error);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBooks()).unwrap();
    }
  }, [status, dispatch]);
  let message;
  let books = [];
  if (status === 'pending') {
    message = 'Loading...';
  } else if (status === 'success') {
    books = postBooks.map((books) => ({
      id: books.id,
      title: books.title,
      author: books.author,
      category: books.category,
    }));
    message = '';
  } else if (status === 'failed') {
    message = error;
  }
  return (
    <div className="books-cms">
      <BookList books={books} dispatch={dispatch} />
      <h2 className="add-book-heading">Add new book</h2>
      <NewBook dispatch={dispatch} />
      <h1>{message}</h1>
    </div>
  );
};
export default Books;
