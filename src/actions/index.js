let nextTodoId = 0;

export const addTodo = (text) => ({
    type: "ADD_TODO",
    id: nextTodoId,
    text
});

export const setVisibility = (filter) => ({
    type: "SET_VISIBILITY",
    filter
});

export const toggleTodo = (id) => ({
    type: "TOGGLE_TODO",
    id
});