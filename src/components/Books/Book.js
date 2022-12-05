import { PropTypes } from 'prop-types';

const Book = (props) => {
  const {
    id, author, title, category,
  } = props;
  return (
    <div>
      <div className="book-list" id={id}>
        <h2 className="book-category">{category}</h2>
        <h2 className="book-title">{title}</h2>
        <h2 className="book-author">{author}</h2>
      </div>
    </div>
  );
};

Book.propTypes = {

  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,

};
export default Book;
