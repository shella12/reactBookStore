import { PropTypes } from 'prop-types';
import { deleteBook } from '../../redux/books/books';

const Book = (props) => {
  const {
    id, author, title, category, dispatch,
  } = props;
  return (

    <div className="book-list" id={id}>
      <div className="book-details-col1">
        <div>
          <h2 className="book-category">{category}</h2>
          <h2 className="book-title">{title}</h2>
          <h2 className="book-author">{author}</h2>
        </div>
        <div className="list-btn-div">
          <button className="list-btn" type="button">Comments</button>
          <button className="list-btn" type="button" onClick={() => dispatch(deleteBook(id))}>Remove</button>
          <button className="list-btn" type="button">Edit</button>
        </div>
      </div>
      <div className="book-details-col2">
        <div className="book-details-col2-1">
          <div className="circle">&nbsp;</div>
          <div>
            <h2 className="percentage">64%</h2>
            <h3 className="completed-text">Completed</h3>
          </div>
        </div>
        <div className="book-details-col2-2">
          <div>
            <h2 className="current-chapter">Current Chapter</h2>
            <h3 className="progress">Chapter 3: &quot; A Lesson Learned &quot;</h3>
          </div>
          <button className="update-progress-btn" type="button">Update progress</button>
        </div>
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
