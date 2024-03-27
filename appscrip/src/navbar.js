import React, { useState } from 'react';
import './App.css'; 
import { DiReact } from "react-icons/di";
import { CiSearch, CiHeart, CiRollingSuitcase, CiUser } from "react-icons/ci";
import ProductList from './ProductList';
import Footer from './Footer';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [showFilters, setShowFilters] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className='header'>
      <div className="logo">
        <div className='logo-icon'>
          <DiReact />
        </div>
        <div className='logo-text'>
          Logo
        </div>
        <div className='logo-icons'>
          <CiSearch />
          <CiHeart />
          <CiRollingSuitcase />
          <CiUser />
          <select id="language" name="language">
            <option value="Eng">Eng</option>
            <option value="Tel">Tel</option>
            <option value="Hindi">Hindi</option>
            <option value="Latin">Latin</option>
          </select>
        </div>
      </div>
      <nav className="navbar">
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
          &#9776;
        </button>
        <ul className={isOpen ? 'menu active' : 'menu'}>
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </nav>
      <div className="content">
        <div className="discover">
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet est posuere<br/>
            rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </div>
        <div className='filters'>
          <div>
            <b>3425</b>
            <span className="show-filters" onClick={toggleFilters}>
              {showFilters ? 'HIDE FILTERS' : 'SHOW FILTERS'}
            </span>
            {showFilters && (
              <div className="filter-list">
                               <p><select id="filters" name="filters">
             <option value="ideal">IDEAL FOR</option>
             <option value="ideal">ideal</option>
           </select></p>
           <p><select id="filters" name="filters">
             <option value="occasion">OCCASION</option>
             <option value="occasion">ocassion</option>
           </select></p>
           <p><select id="filters" name="filters">
             <option value="work">WORK</option>
             <option value="work">work</option>
           </select></p>
           <p><select id="filters" name="filters">
             <option value="FABRIC">FABRIC</option>
             <option value="fabric">Fabric</option>
           </select></p>
           <p><select id="filters" name="filters">
             <option value="SEGMENT">SEGMENT</option>
             <option value="segment">Segment</option>
           </select></p>
          <p><select id="filters" name="filters">
            <option value="Suitable">SUITABLE FOR</option>
            <option value="Suitable for">Suitable for</option>
          </select></p>
           <p><select id="filters" name="filters">
            <option value="Raw">RAW MATERIALS</option>
             <option value="Raw">Raw Materials</option>
          </select></p>
          <p><select id="filters" name="filters">
             <option value="Pattern">PATTERN</option>
             <option value="pattern">Pattern</option>
           </select></p>
              </div>
            )}
          </div>
          <div>
            <select id="recommend" name="recommend">
              <option value="RECOMMENDED">RECOMMENDED</option>
              <option value="NEWEST FIRST">NEWEST FIRST</option>
              <option value="POPULAR">POPULAR</option>
              <option value="PRICE:HIGH TO LOW">PRICE:HIGH TO LOW</option>
              <option value="PRICE:LOW TO HIGH">PRICE:LOW TO HIGH</option>
            </select>
          </div>
        </div>
      </div>
      <ProductList/>
      <Footer/>
    </div>
  );
};

export default Navbar;
