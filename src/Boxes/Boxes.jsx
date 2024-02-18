import React, { useState, useEffect } from 'react';
import './Boxes.css';

function Boxes({ resetFlag }) {
  const [lastClickedIndex, setLastClickedIndex] = useState(
    window.localStorage.getItem('index') ? 
    parseInt(window.localStorage.getItem('index')) : -1
  );

  useEffect(() => {
    if (resetFlag) {
      setLastClickedIndex(-1);
      window.localStorage.removeItem('index');
    }
  }, [resetFlag]);

  const setLocalStorage = index => {
    try {
      if (index === lastClickedIndex + 1) {
        setLastClickedIndex(index);
        window.localStorage.setItem('index', index.toString());
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getColorClass = (index) => {
    return index <= lastClickedIndex ? 'Box filled' : 'Box';
  };

  return (
    <div className='Boxes'>
      {[...Array(21)].map((_, index) => (
        <div
          key={index}
          className={getColorClass(index)}
          onClick={() => setLocalStorage(index)}
        ></div>
      ))}
    </div>
  );
}

export default Boxes;
