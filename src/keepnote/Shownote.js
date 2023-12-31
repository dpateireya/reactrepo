function Shownote(props) {
  function deleteData() {
    props.onDeleteNote(props.id);
  }
  return (
    <div className="keep_list_style">
      <div className="keep_list_head_style">
        <span className="keep_label_style">{props.title}</span>
      </div>
      <div className="keep_list_parag_style">
        <p className="keep_label_style">{props.details}</p>
      </div>
      <div style={{ textAlign: "right" }}>
        <button onClick={deleteData} className="keep_del_button_style">
          {" - "}
        </button>
      </div>
    </div>
  );
}

export default Shownote;
