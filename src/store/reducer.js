const initialState = {
    todos: []
}

const reducer = (state = initialState, action) => {
    if(action.type === "ADD_TODO"){
        console.log("To do added");
        console.log(`Value: ${action.val}`);
        const toPush = {
            todo: action.val, 
            id: Math.random(), 
            completed: false,
            dateCreated: new Date()
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
                console.log(el);
            }
        })
    }

    return state;
}

export default reducer;