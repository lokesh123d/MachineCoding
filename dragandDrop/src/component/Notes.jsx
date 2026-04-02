import React, { createRef, useEffect, useRef } from "react";
import Note from "./Note";

const Notes = ({ notes = [], setNotes = () => {} }) => {
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const updateNotes = notes.map((note) => {
      const savedNote = savedNotes.find((n) => n.id == note.id);
      if (savedNote) {
        return {
          ...note,
          position: savedNote.position,
        };
      } else {
        const position = determinNewPosition();
        return { ...note, position };
      }
    });
    setNotes(updateNotes);

    localStorage.setItem("notes", JSON.stringify(updateNotes));
  }, [notes.length]);

  const determinNewPosition = () => {
    const maxX = window.innerWidth - 250;
    const maxY = window.innerHeight - 100;

    return {
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY),
    };
  };



const noteRefs = useRef([]);


function handleDragStart(note,e){
    console.log('rect')
const noteRef = noteRefs.current[note.id]?.current;
if (!noteRef) return;
const rect = noteRef.getBoundingClientRect();

const offsetX = e.clientX-rect.left;
const offsetY = e.clientY-rect.top;

function handleMouseMove (e){

    const newX = e.clientX-offsetX;
    const newY = e.clientY-offsetY;

    noteRef.style.left= `${newX}px`
    noteRef.style.top= `${newY}px`
}
function handleMouseUp (){
    document.removeEventListener('mousemove',handleMouseMove)
document.removeEventListener('mouseup',handleMouseUp);


const finalRact = noteRef.getBoundingClientRect();
const newPosition = {x:finalRact.left,y:finalRact.top}
updateNotePosition(note.id,newPosition)

}

document.addEventListener('mousemove',handleMouseMove)
document.addEventListener('mouseup',handleMouseUp)

}


const updateNotePosition=(id,newPosition)=>{
const updateNotes  = notes.map(note=>note.id==id?{...note,position:newPosition}:note);
    setNotes(updateNotes);

    localStorage.setItem("notes", JSON.stringify(updateNotes));
}

return (
    <div>
      {notes.map((note) => {
        return (
          <Note
            key={note.id}
            
            onMouseDown={(e)=>handleDragStart(note,e) }
            ref = {noteRefs.current[note.id]?noteRefs.current[note.id]:(noteRefs.current[note.id] = createRef())}
            initialPosition={note.position}
            content={note.text}
          />
        );
      })}
    </div>
  );
};

export default Notes;
