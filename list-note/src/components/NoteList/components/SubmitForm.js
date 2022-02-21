import React, {Component} from 'react';
import {v4} from 'uuid';

export default class SubmitForm extends Component {

    constructor(props) {
        super(props);
        this.state={
            value: ""
        }
        this.handleAddToDo = this.handleAddToDo.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleAddToDo(e) {
        e.preventDefault();
       if(this.state.value){
        this.props.onAdd({
            id: v4(),
            value: this.state.value
        });

        this.setState({
            value: ''
        })
       }
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }
  
    render() {
        return(
            <form onSubmit={this.handleAddToDo}>
                <input  className='input-text' type='text' value={this.state.value} onChange={this.handleChange} />
                <input  className='input-submit' type='submit' value='Submit' /> 
            </form>
        )
    }
}