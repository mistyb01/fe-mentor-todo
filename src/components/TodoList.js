import React from 'react';
import {ReactComponent as IconCross} from '../images/icon-cross.svg';

function TodoList({ todos }) {
    return (
        <section id="todo-list">
        <ul>
        {todos.map((item) => {
            return (
                <>
                <li key={item.id} className="todo-item">
                    <div className="task-and-checkbox">
                        <input type="checkbox"></input>
                        {item.title}
                    </div>
                    <IconCross/>
                </li>
                <hr/>
                </>
            )
        })}
        </ul>
        </section>
    );
}

export default TodoList;