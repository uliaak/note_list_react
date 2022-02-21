import React, {Component} from 'react';
import Header from './components/Header';
import List from './components/List';
import SubmitForm from './components/SubmitForm';


export default class NoteList extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            tasks: []
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDeleteToDo = this.handleDeleteToDo.bind(this);
    }

    handleAdd(value) {
        this.setState({
            //tasks: [...this.state.tasks,value]
            tasks: this.state.tasks.concat(value)
        })
        console.log(this.state.tasks);
    }

    handleDeleteToDo(id) {
        console.log(id);
        this.setState({
            tasks: this.state.tasks.filter(item => item.id !== id)
        })
    }
    
    render() {
        return(
            <div>
                <Header tasksCounter={this.state.tasks.length}/>
                <SubmitForm onAdd={this.handleAdd}/>
                <List list={this.state.tasks} onDelete={this.handleDeleteToDo}/>
            </div>
        )
    }
}