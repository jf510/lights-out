import React, { useState } from 'react';
import "./Cell.css";



function Cell() {
    const [color, setColor] = useState("black");
    
    const handleClick = () => {
        setColor("yellow");
    }

  return (
    <div className='cell' onClick={handleClick}></div>
  )
}

export default Cell