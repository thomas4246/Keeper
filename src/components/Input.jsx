import React from 'react';

export default function Input() {
  return (
    <div className='input-area'>
      <div className='input-box'>
        <h2>Add a new note</h2>
        <textarea
          name='message'
          rows='2'
          class='question'
          id='msg'
          required
          autocomplete='off'
        ></textarea>
        <label for='msg'>
          <span>Add a Note:</span>
        </label>
        <div>
          <button className='add-btn'>✍🏻</button>
        </div>
      </div>
    </div>
  );
}
