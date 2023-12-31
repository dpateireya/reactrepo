import { useState } from "react";

function Addnote(props) {
  const [Isshow, setIsshow] = useState(false);

  const [Note, setNote] = useState({
    title: "",
    details: "",
  });

  function getNoteData(e) {
    const { name, value } = e.target;
    setNote((obj) => {
      obj[name] = value;
      return { ...obj };
    });
  }

  function addData() {
    props.onAddNote(Note);
    setNote({
      title: "",
      details: "",
    });
  }

  function showElement() {
    setIsshow(true);
  }

  return (
    <>
      <div className="keep_list_style">
        {Isshow && (
          <input
            name="title"
            value={Note.title}
            className="keep_text_style"
            placeholder="Title"
            onChange={getNoteData}
          />
        )}
        <textarea
          name="details"
          value={Note.details}
          rows="4"
          className="keep_textarea_style"
          placeholder="take a note ...."
          onChange={getNoteData}
          onClick={showElement}
        />
        {Isshow && (
          <button onClick={addData} className="keep_button_style">
            Add Note
          </button>
        )}
      </div>
    </>
  );
}

export default Addnote;
