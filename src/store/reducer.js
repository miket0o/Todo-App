const initialState = {
    todos: []
}

const reducer = (state = initialState, action) => {
    if(action.type === "ADD_TODO"){
        const toPush = {
            todo: action.val, 
            id: Math.random(), 
            completed: false
        };

        return{
            ...state,
            todos: [toPush ,...state.todos]
        }
    }

    if(action.type === "DEL_TODO"){
        return{
            ...state,
            todos: state.todos.filter(el => el.id !== action.key)
        }
    }

    if(action.type === "TOGGLE_TODO"){
        state.todos.forEach(el =>{
            if(el.id === action.key){
                if(el.completed){
                    el.completed = false;
                }
                else{
                    el.completed = true;
                }
            }
        })
    }

    return state;
}

export default reducer;