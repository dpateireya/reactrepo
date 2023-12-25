function Todolist(prop) {
  return (
    <li>
      <button
        onClick={() => {
          prop.onSelect(prop.id);
        }}
      >
        x
      </button>
      <span>{prop.item}</span>
    </li>
  );
}

export default Todolist;
