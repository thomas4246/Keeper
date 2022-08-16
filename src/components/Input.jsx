import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Input() {
  return (
    <div className='input-area'>
      <div className='input-box'>
        <TypeAnimation
          sequence={['Add a New Note ...', 1000, 'You Can Do It  ! !', 2000]}
          wrapper='h2'
          cursor={true}
        />
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
