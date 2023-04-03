import React, { useState } from 'react';
import "./CategoriesInput.css"
import {BsFillCaretDownFill, BsFillCaretUpFill} from "react-icons/bs"

const CategoriesInput = ({ categories, selectedcategory, onSelectedcategoryChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handlecategoryClick = (category) => {
    onSelectedcategoryChange(category);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="dropdown__header" onClick={() => setIsOpen(!isOpen)}>
        <input type="text" name="genre" value={selectedcategory} required readOnly/> 
        {isOpen? <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
      </div>
      {isOpen && (
        <ul className="dropdown__categories">
          {categories.map((category, index) => (
            <li
              key={index}
              className={`dropdown__category ${category === selectedcategory ? 'dropdown__category--selected' : ''}`}
              onClick={() => handlecategoryClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoriesInput;