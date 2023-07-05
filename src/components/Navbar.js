import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FaMicrophone } from 'react-icons/fa';

function NavBar() {
  return (
    <>
      <nav>
        <h2>Ecommerce Shop</h2>
        <ul>
          <li>
            <IoSettingsOutline />
          </li>
          <li>
            <FaMicrophone />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
