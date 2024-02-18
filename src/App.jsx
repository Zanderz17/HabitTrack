import React, { useState } from 'react';
import Title from './Title/Title.jsx';
import Boxes from './Boxes/Boxes.jsx';
import Bottom from './Bottom/Bottom.jsx';
import './App.css';

function App() {
  const [resetFlag, setResetFlag] = useState(false);

  const resetBoxes = () => {
    setResetFlag(prevFlag => !prevFlag);
  };

  return (
      <div className='principal'>
      <Title />
      <Boxes resetFlag={resetFlag} />
      <Bottom resetBoxes={resetBoxes} />
      </div>
  );
}

export default App;
