import "./Keepnote.css";
import Heading from "../adsbox/heading/Heading";
import Addnote from "./Addnote";
import Shownote from "./Shownote";
import { useState } from "react";

function Keepnote() {
  const [ListNote, setListNote] = useState([]);

  //add note in list of listnote hooksvariable
  function addNoteData(note) {
    setListNote((obj) => {
      return [...obj, note];
    });
  }

  //delete note by noteid in list of listnote hookvariable
  function deleteNoteData(id) {
    setListNote((obj) => {
      return obj.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <>
      <div className="keep_form_style">
        <Heading head="Keep Note App" />

        <Addnote onAddNote={addNoteData} />
        {ListNote.map((item, index) => {
          return (
            <Shownote
              key={index}
              id={index}
              title={item.title}
              details={item.details}
              onDeleteNote={deleteNoteData}
            />
          );
        })}
      </div>
    </>
  );
}

export default Keepnote;
