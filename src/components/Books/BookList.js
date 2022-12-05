import { PropTypes } from 'prop-types';
import Book from './Book';

const BookList = (props) => {
  const { books } = props;
  return (
    <div>
      <ul>
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            author={book.author}
            title={book.title}
            category={book.category}
          />
        ))}
      </ul>
    </div>
  );
};
export default BookList;

BookList.propTypes = {
  books: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
