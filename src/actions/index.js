const addItem = (data) => {
  return {
    type: "add",
    payload: data,
  };
};

const removeItem = (index) => {
  return {
    type: "remove",
    index,
  };
};

export { addItem, removeItem };
