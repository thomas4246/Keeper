import React from 'react';
import Heading from './Heading';
import Footer from './Footer';
import Note from './Note';

function App() {
  return (
    <>
      <Heading />
      <Note title='First note' content='This is a test note.' />
      <Footer />
    </>
  );
}

export default App;
