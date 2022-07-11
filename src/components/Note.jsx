import React from 'react';

function Note(probs) {
  return (
    <div className='note'>
      <h1>{probs.title}</h1>
      <p>{probs.content}</p>
    </div>
  );
}

export default Note;
