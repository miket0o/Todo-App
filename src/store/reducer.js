const initialState = {
    todos: []
}

const reducer = (state = initialState, action) => {
    if(action.type === "ADD_TODO"){
        console.log("To do added");
        console.log(`Value: ${action.val}`);
        return{
            ...state,
            todos: state.todos.concat({todo: action.val, id: Math.random()}),
            id: state.id + 1
        }
    }

    if(action.type === "DEL_TODO"){
        return{
            ...state,
            todos: state.todos.filter(el => el.id !== action.key)
        }
    }

    return state;
}

export default reducer;