import { useState } from "react";
import { Link } from "react-router-dom";
import { books } from "../../data/books";
import "./header.css";
import "../../components/authors/authors.css"

const HeaderMiddle = () => {
  const [search, setSearch] = useState(" ");

  return (
    <div className="header-middle">
      <Link to="/" className="header-middle-logo">
        <b>Book</b>
        <i className="bi bi-book"></i>
        <b>Store</b>
      </Link>
      <div className="header-middle-search-box">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="header-middle-search-input"
          type="search"
          placeholder="search in book store.."
        />
        <i className="bi bi-search"></i>
        {books
          .filter((book) => book.title.toLowerCase().includes(search))
          .map((book) => (
            <div key={book.id} className="books">
              <img src={book.image} alt={book.title} className="author-img" />
              <h2 className="author-name">{book.title}</h2>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HeaderMiddle;