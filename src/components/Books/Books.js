import BookList from './BookList';
import NewBook from './NewBook';

const Books = () => {
  const books = [
    {
      id: '32',
      title: 'The Great Gastby',
      author: 'F. Scott Fitzgerald',
      category: 'Fiction',
    },
    {
      id: '34',
      title: 'Lord of the Flies',
      author: 'William Golding',
      category: 'Fiction',
    },
  ];
  return (
    <div>
      <BookList books={books} />
      <h2 className="add-book-heading">Add new book</h2>
      <NewBook />
    </div>
  );
};
export default Books;
