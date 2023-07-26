import { useEffect, useState } from 'react';
import NotesList from './components/NotesList';
import {nanoid} from 'nanoid';
import Search from './components/Search';
import Header from './components/Header';

function App() {
  const[notes, setNotes] = useState([
    {
      id: 1,
      text : "First notes box",
      date: "21/04/23",
    },
    {
      id: 2,
      text : "Second notes box",
      date: "22/04/23",
    },
    {
      id: 3,
      text : "Third notes box",
      date: "23/04/23",
    },
    {
      id: 4,
      text : "Fourth notes box",
      date: "24/04/23",
    },
    {
      id: 5,
      text : "Fifth notes box",
      date: "25/04/23",
    },
  ]);

  const [searchText, setSearchText] = useState('');
  const[darkMode, setDarkMode] = useState(false);

  useEffect(() =>{
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-info')
    );

    if(savedNotes){
      setNotes(savedNotes);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem(
      'react-notes-info', 
      JSON.stringify([...notes])
    );
  }, [notes]);

  const addNote = (text) =>{
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }
  return (
    // for making notesList responsive we added the container class
    <div className={`${darkMode && 'dark_mode'}`}>
      <div className='container'>    
        <Header handleToggleDarkMode = {setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <NotesList 
          notes = {notes.filter((note) => 
            note.text.toLowerCase().includes(searchText)
          )} 
          handleAddNote={addNote} 
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
