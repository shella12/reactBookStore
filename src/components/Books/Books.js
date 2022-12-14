import { useDispatch, useSelector } from 'react-redux';
import BookList from './BookList';
import NewBook from './NewBook';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <BookList books={books} />
      <h2 className="add-book-heading">Add new book</h2>
      <NewBook dispatch={dispatch} />
    </div>
  );
};
export default Books;
