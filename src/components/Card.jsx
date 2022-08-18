import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function Card({ text, note, notes, setNotes, key }) {
  const [isComplete, setComplete] = useState(false);

  const deleteAnimation = () => {
    let note = document.getElementById('note');
    note.classList.add('delete-animation');
  };

  const handelComplete = () => {
    setComplete(!isComplete);
  };

  const handelDelete = () => {
    setNotes(notes.filter((item) => item.id !== note.id));
  };

  return (
    <>
      <TransitionGroup component='ul'>
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
      </TransitionGroup>
    </>
  );
}
