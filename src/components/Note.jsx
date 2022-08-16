import React from 'react';

export default function Note({ content }) {
  return (
    <div className='note'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <p>Buy Milk</p>
            <div className='note-btn'>
              <button>✅</button>
              <button>🗑</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
