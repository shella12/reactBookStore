import { PropTypes } from 'prop-types';
import Book from './Book';

const BookList = (props) => {
  const { books, dispatch } = props;
  return (
    <div>
      <ul className="book-ul">
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            author={book.author}
            title={book.title}
            category={book.category}
            dispatch={dispatch}
          />
        ))}
      </ul>
    </div>
  );
};
export default BookList;

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  dispatch: PropTypes.func.isRequired,
};
