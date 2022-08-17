import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Input({ text, setText, notes, setNotes }) {
  const handelChange = (e) => {
    let newText = e.target.value;
    setText(newText);
  };

  const handelClick = (e) => {
    // e.preventDefault();
    setNotes([
      ...notes,
      { text: text, completed: false, id: Math.floor(Math.random() * 1000) },
    ]);
    setText('');
  };

  return (
    <div className='input-area'>
      <form className='input-box'>
        <TypeAnimation
          sequence={['Add a New Note ...', 1000, 'You Can Do It  ! !', 2000]}
          wrapper='h2'
          cursor={true}
          repeat={1}
        />
        <textarea
          name='message'
          rows='2'
          className='question'
          id='msg'
          required
          autoComplete='off'
          value={text}
          onChange={handelChange}
        ></textarea>
        <label htmlFor='msg'>
          <span>Add a Note:</span>
        </label>
        <div>
          <button className='add-btn' onClick={handelClick}>
            ✍🏻
          </button>
        </div>
      </form>
    </div>
  );
}
