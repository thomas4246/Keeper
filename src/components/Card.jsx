import React, { useState } from 'react';

export default function Card({ text, note, notes, setNotes }) {
  const [isComplete, setComplete] = useState(false);

  const handelComplete = () => {
    setComplete(!isComplete);
  };

  const handelDelete = () => {
    setNotes(notes.filter((item) => item.id !== note.id));
  };
  return (
    <>
      <div className={isComplete ? 'card-decoration' : null}>
        <div className='note'>
          <p className={isComplete ? 'text-decoration' : null}>{text}</p>
          <div className='note-btn'>
            <button onClick={handelComplete}>✅</button>
            <button onClick={handelDelete}>🗑</button>
          </div>
        </div>
      </div>
    </>
  );
}
