import React, { ChangeEvent } from "react";

interface NewNoteProps {
  addNote(note: string): any;
}

const NewNote: React.FC<NewNoteProps> = ({ addNote }) => {
  const [note, setNote] = React.useState<string>("");
  const updateNote = (e: ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };
  const handleAddNote = () => {
    addNote(note);
    setNote("");
  };
  return (
    <div>
      <input
        onChange={updateNote}
        value={note}
        type="text"
        name="note"
        placeholder="Add new note"
      />
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
};

export default NewNote;
