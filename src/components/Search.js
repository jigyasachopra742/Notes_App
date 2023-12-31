import React from 'react'
import {MdSearch} from 'react-icons/md'
import './Search.css'

function Search({handleSearchNote}) {
  return (
    <div className='search'>
        <MdSearch className='search_symbol' size='1.3em'/>
        <input 
            onChange = {(event) => 
                handleSearchNote(event.target.value)
            } 
            type='text' 
            placeholder='type text to search...' 
        />
    </div>
  )
}

export default Search