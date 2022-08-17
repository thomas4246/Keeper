import React from 'react';
import Card from './Card';

export default function Note({ notes }) {
  return (
    <div>
      {notes.map((note) => (
        <Card text={note.text} />
      ))}
    </div>
  );
}
