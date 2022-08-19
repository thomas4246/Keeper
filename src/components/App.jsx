import React, { useState, useEffect } from 'react';
import Heading from './Heading';
import Footer from './Footer';
import Note from './Note';
import Input from './Input';

export default function App() {
  const [text, setText] = useState('');
  const [notes, setNotes] = useState([]);
  const [noteColor, setNoteColor] = useState('var(--note)');

  //// Local Storage ////

  useEffect(() => {
    const getLocalNotes = () => {
      if (localStorage.getItem('notes') === null) {
        localStorage.setItem('notes', JSON.stringify([]));
      } else {
        let localNotes = JSON.parse(localStorage.getItem('notes'));
        setNotes(localNotes);
      }
    };
    getLocalNotes();
  }, []);

  useEffect(() => {
    const saveLocalNotes = () => {
      localStorage.setItem('notes', JSON.stringify(notes));
    };
    saveLocalNotes();
  }, [notes]);

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
