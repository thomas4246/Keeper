import React, { useState, useEffect } from 'react';

export default function Card({ text, note, notes, setNotes, time }) {
  const [isComplete, setComplete] = useState(false);

  //// Text Line Through Decoration ////
  const handelComplete = () => {
    setComplete(!isComplete);
  };
  //// Filter & Delete Notes ////
  const handelDelete = () => {
    setNotes(notes.filter((item) => item.id !== note.id));
  };

  return (
    <>
      <div className='note' id='note'>
        <p style={{ fontSize: '.7rem', color: 'gray' }}>{time}</p>
        <p
          suppressContentEditableWarning={true}
          contentEditable
          className={isComplete ? 'text-decoration' : null}
        >
          {text}
        </p>
        <div className='note-btn'>
          <button onClick={handelComplete} id='check'>
            ✏️
          </button>
          <button onClick={handelDelete} id='trash'>
            🗑
          </button>
        </div>
      </div>
    </>
  );
}
