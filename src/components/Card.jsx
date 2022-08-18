import React, { useState } from 'react';

export default function Card({ text, note, notes, setNotes, noteColor }) {
  const [isComplete, setComplete] = useState(false);

  const handelComplete = () => {
    setComplete(!isComplete);
  };

  const handelDelete = () => {
    setNotes(notes.filter((item) => item.id !== note.id));
  };

  return (
    <>
      <div className='note' id='note'>
        <p
          contentEditable={true}
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
