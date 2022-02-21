import React, {Component} from 'react';


export default class Header extends Component {
  
    render() {
        return(
            <header>
                <h1>You have {this.props.tasksCounter} todos</h1>
            </header>
        )
    }
}