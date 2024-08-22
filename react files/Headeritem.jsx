import React from 'react';
import './css/headerlist.css'

function Headeritem({ name }) {
  return (
    <div className='flex justify-center header-item-container'>
      <div className='header-item'>
        <h2 className='flex '>{name}</h2>
      </div>
    </div>
  );
}

export default Headeritem;
