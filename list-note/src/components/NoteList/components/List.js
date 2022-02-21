import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {Component} from 'react';

export default class List extends Component {

    render() {
        return(
            <ul>
                {this.props.list.map(({id, value}) => {
                    return(
                        <li key={id}>
                            {value}

                            <button onClick={() => this.props.onDelete(id)}>
                                <FontAwesomeIcon icon={faTrash}/>
                            </button>
                        </li>
                        
                    )
                })}
            </ul>
        )
    }
}