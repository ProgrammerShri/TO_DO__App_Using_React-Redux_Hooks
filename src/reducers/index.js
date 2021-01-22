const itemReducer = (state = { names : []}, action) => {
  console.log(action.type);
  switch (action.type) {
    case "add":
      return { names : [...state.names, action.payload]}
    case "remove":
      return{names: state.names.filter((item, index) => index !== action.index)}
    default:
      return state;
  }
};
export default itemReducer;