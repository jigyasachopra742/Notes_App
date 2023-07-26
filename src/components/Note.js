import React from 'react'
import {MdDelete} from 'react-icons/md'
import './Note.css'

function Note({ id, text, date, handleDeleteNote}) {
  return (
    <div className='note'>
        <p>{text}</p>
        <div className='note_footer'>
            <small>{date}</small>
            <MdDelete 
                onClick = {() => handleDeleteNote(id)} 
                className='delete_symbol' 
                size='1.5em'
            />
        </div>
    </div>
  );
};

export default Note;