import React, {useRef, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
// import itemReducer from "./reducers";
import "./App.css";
import { addItem, removeItem } from "./actions";

function App() {
  // const initialState = [];
  // const [tasks, dispatch] = useReducer(itemReducer, initialState);
  const tasks = useSelector((state) => (state))
console.log(tasks)
  const dispatch = useDispatch()

  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());

  function handleSubmit(e) {
    e.preventDefault();
    const name =  inputRef.current.value
    dispatch(addItem(name));
    inputRef.current.value = "";
  }

  return (
    <div className="mainDiv">
      <label className="label">To-Do APP</label>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write Your Task Here...."
          ref={inputRef}
          className="input"
          minLength="0"
          maxLength="25"
        />
      </form>
      <div className="subDiv">
        <ul type="1">
          {tasks?.names?.map((task, index) => (
            <div className="Div">
              <li className="taskList ">{task}</li>
              <label
                key={index}
                className="taskLabel"
                style={{ flexDirection: "row-reverse" }}
                onClick={() => dispatch(removeItem(index))}
              >
                ❌
              </label>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
