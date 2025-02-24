import React from 'react';
import { Link } from 'react-router-dom'; // React Routerを使用する場合
import './Navigation.css'; // CSSファイルのインポート

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/publications">Publications</Link></li>
          <li><Link to="/news">News</Link></li> {/* New News tab */}
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
