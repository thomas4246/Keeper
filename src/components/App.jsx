import React, { useState } from 'react';
import Heading from './Heading';
import Footer from './Footer';
import Note from './Note';
import Input from './Input';

export default function App() {
  const [text, setText] = useState('');
  const [notes, setNotes] = useState([]);
  return (
    <>
      <Heading />
      <Input text={text} setText={setText} setNotes={setNotes} notes={notes} />
      <Note notes={notes} />
      <Footer />
    </>
  );
}
