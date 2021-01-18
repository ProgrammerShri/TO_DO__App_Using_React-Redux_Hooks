export const addUser = data => {
    return {
        type: "ADD_USER",
        payload: data
    };
};

export const removeUser = index => {
    return {
        type: "REMOVE_USER",
        index 
    };
};