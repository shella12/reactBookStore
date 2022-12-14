import { PropTypes } from 'prop-types';
import { removeBook } from '../../redux/books/books';

const Book = (props) => {
  const {
    id, author, title, category, dispatch,
  } = props;
  return (
    <div>
      <div className="book-list" id={id}>
        <h2 className="book-category">{category}</h2>
        <h2 className="book-title">{title}</h2>
        <h2 className="book-author">{author}</h2>
        <button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
      </div>
    </div>
  );
};

Book.propTypes = {

  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,

};
export default Book;
