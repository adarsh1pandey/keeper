import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map(noteVal =>
      (
        <Note
          key = {noteVal.key} 
          title = {noteVal.title}
          content = {noteVal.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
