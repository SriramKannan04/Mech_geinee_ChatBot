import React from 'react';
import './Navbar.css';

import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from React Router

import darkImage from './dark.png';
import lightImage from './light.jpg';
import defaultImage from './blueWallpaper.jpg';

function Navbar() 
{
  const [selectedOption, setSelectedOption] = useState('');

  const handleThemeChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // Update the background image based on the selected option
    if (selectedValue === '1') 
    {
      document.body.style.backgroundImage = `url(${darkImage})`;
    } 
    else if (selectedValue === '2') 
    {
      document.body.style.backgroundImage = `url(${lightImage})`;
    } 
    else if (selectedValue === '0') 
    {
      document.body.style.backgroundImage = `url(${defaultImage})`;
    }
  };

  return (
    <div>
      <header>
        <nav>
          {/* <li>
            <img src="./img/login.png" className="navImg" alt="#" />
            <a href="https://www.figma.com/">Login</a>
          </li> */}
          <Link className='a' to="/Homepage"><img src="./img/MECH2.png" alt="#" className="LogoName"/></Link>

          <ul>
            <li>
              <img src="./img/login.png" className="navImg" alt="#" />
              {/* Use the Link component from React Router */}
              <Link className='a' to="/Login">Login</Link>
            </li>
            <li>
              <img src="./img/book.png" className="navImg" alt="#" />
              {/* Use the Link component from React Router */}
              <Link className='a' to="/DataBook">Data-Book</Link>
            </li>
            <li>
              <img src="./img/features.png" className="navImg" alt="#" />
              {/* Use the Link component from React Router */}
              <Link className='a' to="/Features">Features</Link>
            </li>
            <li>
              <img src="./img/support.png" className="navImg" alt="#" />
              {/* Use the Link component from React Router */}
              <Link className='a' to="/Support">Support</Link>
            </li>
            <li className="space">
              <select value={selectedOption} onChange={handleThemeChange}>
                <option value="0">Default</option>
                <option value="1">Dark   {/* <img src="./img/night-mode.png" alt="#" srcset="" /> */}  </option>
                <option value="2">Light  {/* <img src="./img/light-mode.png" alt="#" srcset="" /> */}  </option>
              </select>
            </li>
          </ul>
        </nav>
      </header>
      
    </div>
  );
}

export default Navbar;
