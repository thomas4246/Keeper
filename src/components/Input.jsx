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

  //// Render Input text ////
  const handelClick = (e) => {
    if (!text || /^\s*$/.test(text)) {
      return;
    }

    e.preventDefault();

    //// Time when note is created ////
    const time = new Date().toLocaleString();

    setNotes([
      ...notes,
      { time: time, text: text, id: Math.floor(Math.random() * 10000) },
    ]);
    setText('');
  };

  //// Note BackGround Color Picker ////
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
          style={{ color: ' var(--text-color)' }}
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
