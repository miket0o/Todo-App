import React, { Component } from 'react';
import { connect } from 'react-redux';

class SortTodo extends Component {
    render() { 
        return (
            <div className="sortTodos">
                <label>Display: </label>
                <button onClick={() => this.props.setVisibilityFilter('SHOW_ALL')}>All</button>
                <button onClick={() => this.props.setVisibilityFilter('SHOW_COMPLETED')}>Completed</button>
                <button onClick={() => this.props.setVisibilityFilter('SHOW_ACTIVE')}>Active</button>
            </div>
        );
    }
}

const mapDispachToProps = dispach =>{
    return{
        setVisibilityFilter: (filter) => dispach({type: 'SET_VISIBILITY_FILTER', filter})
    }
}
 
export default connect(null, mapDispachToProps)(SortTodo);