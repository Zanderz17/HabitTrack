import React from 'react';
import './Bottom.css';

function Bottom({ resetBoxes }) {
  const handleReset = () => {
    resetBoxes();
  };

  return (
    <div className='Bottom'>
      <div className='izquierda'>
        <div onClick={handleReset}>Delete</div>
      </div>
      <div className='derecha'>
        <p>Follow me on</p>
        <img src='./tiktok.png' alt="tiktok logo"/>
      </div>
    </div>
  );
}

export default Bottom;
