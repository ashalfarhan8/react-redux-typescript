// import { addNote } from "./actions";
// import NewNote from "./components/NewNote";
// import { NoteState } from "./store/notesReducer";
// import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import React from "react";
import Header from "./components/Header";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";

function App() {
  // const notes = useSelector<NoteState, NoteState["notes"]>(
  //   (state) => state.notes
  // );
  // const dispatch = useDispatch();
  // const handleAddNote = (note: string) => {
  //   dispatch(addNote(note));
  // };

  return (
    <div>
      <Header />
      <PostForm />
      <Posts />
      {/* <NewNote addNote={handleAddNote} />
      <hr />
      <ul>
        {notes.map((note, idx) => {
          return <li key={idx}>{note}</li>;
        })}
      </ul> */}
    </div>
  );
}

export default App;
