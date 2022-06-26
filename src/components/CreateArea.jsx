import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

  const blankNote = { title:"", content:"" };
  const [note, setNote] = useState(blankNote);
  
 
  function handleChange(event) {
   const { name, value } = event.target;
 
   setNote(prevNote => {
    return {
     ...prevNote,
     [name]: value
    };
   });
  }
  function submitNote(event){
  props.onAdd(note)
  setNote(
    { title:"", content:"" }
  )
  event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input 
            name="title" 
            value={note.title}
            onChange={handleChange} 
            placeholder="Title" />
        <textarea 
            name="content" 
            value={note.content} 
            onChange={handleChange} 
            placeholder="Take a note..." rows="3" />
            <Zoom in={true}>
              <Fab onClick={submitNote}><AddIcon /></Fab>
            </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
