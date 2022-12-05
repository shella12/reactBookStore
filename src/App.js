import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Categories from './components/Categories/Categories';
import Books from './components/Books/Books';

function App() {
  return (
    <div className="App">
      <h1 className="main-heading">BookStore CMS</h1>
      <nav className="navbar">
        <Link to="/">Books</Link>
        <Link to="/Categories">Categories</Link>
      </nav>
      <Routes>
        <Route index element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
