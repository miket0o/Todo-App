import React, { Component } from 'react';
import { connect } from 'react-redux';

class DisplayTodo extends Component {
    render() { 
        let todos = this.props.todos.map(item => {
            return <li key={item.id} onClick={() => this.props.delTodo(item.id)}>{item.todo}</li>
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

const mapStateToProps = (state) =>{
    return{
        todos: state.todos,
        id: state.id
    }
}

const mapDispachToProps = (dispach) => {
    return{
        delTodo: (key) => dispach({type: "DEL_TODO", key: key})
    }
}
 
export default connect(mapStateToProps, mapDispachToProps)(DisplayTodo);