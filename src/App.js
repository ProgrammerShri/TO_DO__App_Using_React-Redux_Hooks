import React, {useRef} from "react";
import {useSelector , useDispatch} from "react-redux";
import { addUser, removeUser } from "./actions";
import allReducers from "./reducers"

  
const App = () => {
  
  const users = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const userRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(userRef.current.value))
    userRef.current.value = "";
  } 

  return (
    <>
    <h2> User </h2>
    <form onSubmit ={handleSubmit}>
      <input type="text" placeholder="Username" ref={userRef} />
    </form>
    <ul>
      {users.map((user, index) => (
        
        <li key={index}>  {user.name}  
        <button onClick= {() => dispatchEvent(removeUser(index))}> * </button>        
        </li>
        
      ))}
    </ul>
    </>

  );
};


export default App;