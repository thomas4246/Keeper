import React from 'react';
import Card from './Card';

export default function Note({ notes, setNotes }) {
  return (
    <div>
      {notes.map((note) => (
        <Card
          note={note}
          text={note.text}
          key={note.id}
          notes={notes}
          setNotes={setNotes}
        />
      ))}
    </div>
  );
}
