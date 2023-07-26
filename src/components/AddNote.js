import React, { useState } from 'react'
import './AddNote.css';

function AddNote({ handleAddNote }) {
  const[noteText, setNoteText] = useState('');
  const characterLimit = 200;
  
  const handleChange = (event) =>{
    if(characterLimit - event.target.value.length >= 0)
    {
      setNoteText(event.target.value);
    }
    // console.log(event.target.value);
  };

  const handleSave = () => {
    if(noteText.trim().length > 0)
    {
      handleAddNote(noteText);
      setNoteText('');
    } 
  };
 
  return (
    <div className='new_note'>
        <textarea
            rows='8'
            cols='10'
            placeholder='Type to add more text'
            value={noteText}
            onChange={handleChange}
        ></textarea>
        <div className='note_footer'>
            <small>{characterLimit - noteText.length} remaining</small>
            <button className='save' onClick={handleSave}>Save</button>
        </div>
    </div>
  );
};

export default AddNote;