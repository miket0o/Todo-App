const initialState = {
    visibilityFilter: 'SHOW_ALL',
    todos: []
}

const visibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

const reducer = (state = initialState, action) => {
    let nextState = {...state}
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
                el.completed = !el.completed;
            }
        })
    }

    if(action.type === 'SET_VISIBILITY_FILTER'){
        return{
            ...state,
            visibilityFilter: visibilityFilters[action.filter]
        }
    }

    return state;
}

export default reducer;