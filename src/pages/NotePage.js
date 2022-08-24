import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
import { Link } from 'react-router-dom'

function NotePage() {
    let params = useParams()

    let noteId = params.id
    console.log(noteId, "Note ID")
    let [note, setNote] = useState(null)

    useEffect(() => {
       getNote()
    }, [noteId])

     let getNote = async () => {
        if (noteId === 'new') return

        let response = await fetch(`/api/notes/${noteId}/`)
        let data = await response.json()
        setNote(data)
    }

     
  return (
    
    <div className="note" >
      <div className="note-header">
        <h3>
            <ArrowLeft  />
        </h3>
      </div> 

    <textarea  defaultValue={note?.body}></textarea>
    
    </div>
  )
}

export default NotePage