import React from 'react';

function InputTodo() {
    return (
        <section id="input-todo" className="gray-container task-and-checkbox">
            <div className="round-checkbox"></div>
            <input type="text" placeholder="Create a new todo..."/>
        </section>
    )
}

export default InputTodo;