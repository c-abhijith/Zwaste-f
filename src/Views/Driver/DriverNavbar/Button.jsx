import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <div className="buttonrootlogout">
    <Link to='/'>
      <button className='btn22'>Logout</button>
    </Link>
    </div>
  );
}