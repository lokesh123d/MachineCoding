import React, { useState } from "react";
import Notes from "./component/Notes";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "I am Preparing for a Frontend Developer Interview at Natwest .",
    },
    {
      id: 2,
      text: 'That"s why i am Learing Now React is that important for interview',
    },
  ]);
  return (
    <div>
      <Notes notes={notes} setNotes={setNotes} />
    </div>
  );
};

export default App;
