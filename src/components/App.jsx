import React, { useState } from 'react';
import Heading from './Heading';
import Footer from './Footer';
import Note from './Note';
import Input from './Input';

export default function App() {
  const [text, setText] = useState('');
  const [notes, setNotes] = useState([]);
  const [noteColor, setNoteColor] = useState('#f7ecde');
  return (
    <>
      <Heading />
      <Input
        text={text}
        setText={setText}
        setNotes={setNotes}
        notes={notes}
        noteColor={noteColor}
        setNoteColor={setNoteColor}
      />
      <Note notes={notes} setNotes={setNotes} noteColor={noteColor} />
      <Footer />
    </>
  );
}
