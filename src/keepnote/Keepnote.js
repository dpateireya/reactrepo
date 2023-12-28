import "./Keepnote.css";
import Heading from "../adsbox/heading/Heading";

function Keepnote() {
  return (
    <>
      <div className="keep_form_style">
        <Heading head="Keep Note App" />
        <div className="keep_list_style">
          <input className="keep_text_style" placeholder="Title" />
          <textarea
            rows="6"
            className="keep_textarea_style"
            placeholder="type description ...."
          />
          <button className="keep_button_style">Add Note</button>
        </div>
        <div className="keep_list_style">
          <div className="keep_list_head_style">
            <span className="keep_label_style">HI</span>
          </div>
          <div className="keep_list_parag_style">
            <p className="keep_label_style">this is a topic</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <button className="keep_del_button_style">-</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Keepnote;
