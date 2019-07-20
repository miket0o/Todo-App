import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

class DisplayTodo extends Component {
    toggleClass(e){
        if(e.target.nextElementSibling.classList.contains('completed')){
            e.target.nextElementSibling.classList.remove('completed');
        }
        else{
            e.target.nextElementSibling.classList.add('completed');
        }
    }

    handleClick(e, key){
        this.toggleClass(e);
        this.props.toggleTodo(key)
    }

    render() {
        let todos = this.props.todos.map(item => {
            return (
                <li key={item.id}>
                    <span className="toggleDone" onClick={(e) => this.handleClick(e, item.id)}>Toggle</span>
                    <p>{item.todo}</p>
                    <span className="removeButton" onClick={() => this.props.delTodo(item.id)}>Remove</span>
                </li>);
        });

        return (
            <div className="todoList">
                {
                    todos.length > 0 ? todos : <p>Add Your Todos</p>
                }
            </div>
        );
    }
}

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        case 'SHOW_ALL':
        default:
            return todos
    }
}

const mapStateToProps = (state) =>{
    return{
        todos: getVisibleTodos(state.todos, state.visibilityFilter),
        id: state.id,
        visibilityFilter: state.visibilityFilter
    }
}

const mapDispachToProps = (dispach) => {
    return{
        delTodo: (key) => dispach({type: "DEL_TODO", key: key}),
        toggleTodo: (key) => dispach({type: "TOGGLE_TODO", key: key})
    }
}
 
export default connect(mapStateToProps, mapDispachToProps)(DisplayTodo);