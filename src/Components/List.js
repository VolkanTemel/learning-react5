import React, { Component } from 'react'

import './Lists.css';

export default class List extends Component {
    state = {
        todos: [ "work hard", "test test test test", "sssssssssssssssssssssssssssssssssssssssssssssss" ]
    }

    render() {
        return (
            <div className="list-div">
                <ul className="list" >
                    { this.state.todos.map((todo, index) => (
                        <li key={ index }>{ todo }</li>
                    )) }
                </ul>
                <div className="bottom-div">
                    <input className="input" placeholder="Enter Some To-Do"></input>
                    <button className="button">Add</button>
                </div>
            </div >
        )
    }
}
