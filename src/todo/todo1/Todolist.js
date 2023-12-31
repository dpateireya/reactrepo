function Todolist(prop) {
  return (
    <li>
      <button
        className="todo_ul_li_button"
        onClick={() => {
          prop.onSelect(prop.id);
        }}
      >
        x
      </button>
      <span className="todo_ul_li_span">{prop.item}</span>
    </li>
  );
}

export default Todolist;
