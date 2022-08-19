import React from 'react';
import Card from './Card';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function Note({ notes, setNotes, noteColor }) {
  return (
    <div className='note-box'>
      <TransitionGroup className='note-container'>
        {notes.map((note) => (
          <CSSTransition
            key={note.id}
            timeout={700}
            classNames='delete-animation'
          >
            <Card
              time={note.time}
              note={note}
              text={note.text}
              key={note.id}
              notes={notes}
              setNotes={setNotes}
              noteColor={noteColor}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
