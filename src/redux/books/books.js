const ADD_BOOK = 'react_book_store/books/ADD_BOOK';
const REMOVE_BOOK = 'react_book_store/books/REMOVE_BOOK';
const DEFAULT_STATE = [];
const booksReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
export const addBook = (id, title, author) => ({
  type: ADD_BOOK,
  id,
  title,
  author,
});
export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default booksReducer;
