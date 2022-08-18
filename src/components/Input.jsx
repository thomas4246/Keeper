import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Input({
  text,
  setText,
  notes,
  setNotes,
  noteColor,
  setNoteColor,
}) {
  const handelChange = (e) => {
    let newText = e.target.value;
    setText(newText);
  };

  const handelClick = (e) => {
    if (!text || /^\s*$/.test(text)) {
      return;
    }

    e.preventDefault();

    setNotes([
      ...notes,
      { text: text, completed: false, id: Math.floor(Math.random() * 10000) },
    ]);
    setText('');
  };

  const handelColor = (e) => {
    if (e.target.innerHTML === '💛') {
      setNoteColor('#ffe9ae');
    } else if (e.target.innerHTML === '💙') {
      setNoteColor('#B2C8DF');
    } else if (e.target.innerHTML === '💚') {
      setNoteColor('#CED89E');
    }
  };

  return (
    <div className='input-area'>
      <form className='input-box' style={{ backgroundColor: noteColor }}>
        <TypeAnimation
          sequence={['Add a New Note ...', 1000, 'You Can Do It  ! !', 2000]}
          wrapper='h2'
          cursor={true}
          repeat={1}
          style={{ color: '#2C3639' }}
        />
        {/* <div className='color-btn'>
          <span onClick={handelColor}>💛</span>
          <span onClick={handelColor}>💙</span>
          <span onClick={handelColor}>💚</span>
        </div> */}
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
            <span>✍🏻</span>
          </button>
        </div>
      </form>
    </div>
  );
}
