import React from 'react';

function TodoList({ todos }) {
    return (
        <section id="todo-list">
        <ul>
        {todos.map((item) => {
            return (
                <li key={item.id}>{item.title}</li>
            )
        })}
        </ul>
        </section>
    );
}

export default TodoList;