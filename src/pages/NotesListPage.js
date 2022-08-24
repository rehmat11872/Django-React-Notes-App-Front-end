import React, {useState, useEffect} from 'react'
import ListItem from '../components/ListItem'

function NotesListPage() {


    let [notes, setNotes] = useState([])

    useEffect(() => {
         getNotes()
    }, [])

    let getNotes = async () => {
       let response = await fetch('http://127.0.0.1:8001/api/notes')
       let data = await response.json()
       console.log('Data::::', data)
       setNotes(data)
    }
  return (
    <div>
      Helo
    <div className="notes-list">
    {notes.map((note, index) => (
        <ListItem key={index} note={note} />
    ))}
</div>
      
    </div>
  )
}

export default NotesListPage