import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkState } from '../../redux/categories/categories';

const Categories = () => {
  const [status, setStatus] = useState('');
  const checkstatus = useSelector((state) => state.categoriesReducer);
  const dispatch = useDispatch();
  const onClickHandle = () => {
    dispatch(checkState());
    setStatus(checkstatus);
  };
  return (
    <div>
      <button className="statusBtn" type="button" onClick={() => onClickHandle()}>Check Status</button>
      <h1>{status}</h1>
    </div>
  );
};
export default Categories;
