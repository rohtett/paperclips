import React from 'react';
import './App.scss';

import Browser from "./Browser/Browser";
import Product from "./Product/Product";

const categories: string[] = ["Art books", "Notebooks", "Paper", "Pens", "Stationary"]

const App = () => {
  return (
    <div className="container">
      <header className="container__header">
        <div className="container__header__title">
          <h1>paperclips</h1>
        </div>
        <div className="container_header_menu">
          <ul className="container_header_menu_list">
            {categories.map((name) => {
              return (
                <li  className="container_header_menu_list_item" key={name}>
                  {name}
                </li>
              )
            })}
          </ul>
        </div>
      </header>
      <Browser />
    </div>
  );
}

export default App;
