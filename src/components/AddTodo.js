import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddTodo extends Component {
    state = {
        text: '',
        update: false
    }

    handleChange(e){
        if(this._inputElement.value !== ''){
            this.setState({
                text: this._inputElement.value
            });
        }

        e.preventDefault();
    }

    handleClick(e){
        this.setState({
            update: true
        });
        if(this._inputElement.value !== ''){
            this.props.addTodo(this.state.text);
            this._inputElement.value = '';
            this._inputElement.focus();
        }
        
        e.preventDefault();
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextState.update === true){
            return true;
        }
        else{
            return false;
        }
    }

    componentDidUpdate(){
        this.setState({
            update: false
        });
    }

    render() {
        return (
            <div className="formContainer">
                <input type="text" placeholder="Type todo" ref={(a) => this._inputElement = a} onChange={this.handleChange.bind(this)} />
                <button ref={(a) => this._buttonElement = a} onClick={this.handleClick.bind(this)}>Add Todo</button>
            </div>
        );
    }
}

const mapDispachToProps = (dispach) =>{
    return {
        addTodo: (val) => dispach({type: "ADD_TODO", val: val})
    }
}
 
export default connect(null, mapDispachToProps)(AddTodo);