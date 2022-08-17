import React from 'react';

export default function Card({ text }) {
  return (
    <>
      <div className='note'>
        <p>{text}</p>
        <div className='note-btn'>
          <button>✅</button>
          <button>🗑</button>
        </div>
      </div>
    </>
  );
}
