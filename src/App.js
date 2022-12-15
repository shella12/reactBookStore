import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { RxAvatar } from 'react-icons/rx';
import { useState } from 'react';
import Categories from './components/Categories/Categories';
import Books from './components/Books/Books';

const App = () => {
  const [isBooksClassActive, setIsBooksClassActive] = useState(true);
  const [isCatClassActive, setIsCatClassActive] = useState(false);
  const onClickHandlerBooks = () => {
    setIsBooksClassActive(true);
    setIsCatClassActive(false);
  };
  const onClickHandlerCat = () => {
    setIsBooksClassActive(false);
    setIsCatClassActive(true);
  };
  return (
    <div className="App">
      <header className="header">
        <div>
          <h1 className="main-heading">BookStore CMS</h1>
          <nav className="navbar">
            <Link id="books-link" className={`${isBooksClassActive ? 'active' : ''}`} onClick={onClickHandlerBooks} to="/">Books</Link>
            <Link id="category-link" className={`${isCatClassActive ? 'active' : ''}`} onClick={onClickHandlerCat} to="/Categories">Categories</Link>
          </nav>
        </div>
        <RxAvatar style={{ color: '#0290ff', fontSize: '2rem' }} />
      </header>
      <Routes>
        <Route index element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  );
};

export default App;
