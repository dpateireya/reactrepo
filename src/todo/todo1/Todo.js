import "./Todo.css";
import Heading from "../../adsbox/heading/Heading";
import { useState } from "react";

function Todo() {
  let [Items, setItems] = useState("");
  let [ListItems, setListItems] = useState([]);

  function addItemsub() {
    setListItems((pre) => {
      const obj = [...pre, Items];
      return obj;
    });
    setItems("");
  }
  // function removeItemsub(e) {
  //   let val = e.target.value;
  //   setListItems(ListItems.filter((pre) => pre !== val));
  // }

  function removeItemsub(e) {
    let val = e.target.value;

    setListItems((preListItems) => {
      return preListItems.filter((item, index) => {
        return item !== val;
      });
    });
  }

  function getItemsub(e) {
    setItems(e.target.value);
  }
  return (
    <>
      <div className="todo_form_style">
        <div>
          <Heading head="To do Array List" />
        </div>
        <div className="todo_form_style">
          <div>
            <input
              className="todo_textbox_style"
              placeholder="Enter the item"
              value={Items}
              type="text"
              onChange={getItemsub}
            />
            <button className="todo_button_style" onClick={addItemsub}>
              +
            </button>
          </div>
          <div>
            <ul>
              {ListItems.map((item, index) => {
                return (
                  <li id={index} key={index}>
                    <button onClick={removeItemsub} id={index} value={item}>
                      x
                    </button>
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
