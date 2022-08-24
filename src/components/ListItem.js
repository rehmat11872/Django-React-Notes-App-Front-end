import React from 'react'

function ListItem({note}) {
  return (
    <div>

    <h3>{note.body}</h3>
    </div>
  )
}

export default ListItem