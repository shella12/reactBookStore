const DEFAULT_STATE = [];
const CHECK_STATE = 'react_book_store/categories/CHECK_STATE';
const categoriesReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case CHECK_STATE:
      return 'Under construction';
    default:
      return state;
  }
};
export const checkState = () => ({
  type: CHECK_STATE,
});
export default categoriesReducer;
