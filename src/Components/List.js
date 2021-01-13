import React, { Component } from 'react'

import './Lists.css';

export default class List extends Component {
    state = {
        todos: [ "work hard", "test test test test", "sssssssssssssssssssssssssssssssssssssssssssssss" ],
        todo:""

    };

    todoss = (e) => {
        this.setState({todo:e.target.value});
    };

    addTodo = () => {
        let a = [...this.state.todos];
        a.push(this.state.todo);
        this.setState({todos:a});
    };

    render() {
        return (
            <div className="list-div">
                <ul className="list" >
                    { this.state.todos.map((todo, index) => (
                        <li key={ index }>{ todo }</li>
                    )) }
                </ul>
                <p>{this.state.todo}</p>
                <div className="bottom-div">
                    <input className="input" placeholder="Enter Some To-Do" onChange={this.todoss}></input>
                    <button className="button" onClick={this.addTodo}>Add</button>
                </div>
            </div >
        )
    }
}
