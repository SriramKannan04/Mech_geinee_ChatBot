import React from 'react';
import './SearchBar.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearchengin} from '@fortawesome/free-brands-svg-icons';
library.add(faSearchengin);

function Searchbar() {
  return (
    <div className="box">
        <input type="text" placeholder="Search here..." />
        <a href="#">
        <i className="fab fa-searchengin"></i>
        </a>
    </div>
  );
}

export default Searchbar;