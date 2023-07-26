import React from 'react'
import Note from './Note'
import './NotesList.css';
import AddNote from './AddNote';

function NotesList({notes, handleAddNote, handleDeleteNote}) {
  return (
    <div className='notes_list'>
        {notes.map((note) =>(
          <Note 
            id={note.id}
            text={note.text}
            date={note.date}
            handleDeleteNote={handleDeleteNote}
          />
        ))}
        <AddNote handleAddNote = {handleAddNote}/>
    </div>
  )
}

export default NotesList;