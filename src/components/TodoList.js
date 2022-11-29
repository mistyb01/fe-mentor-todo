import React from 'react';
import {ReactComponent as IconCross} from '../images/icon-cross.svg';

function TodoList({ todos }) {
    return (
        <section id="todo-list" className="gray-container">
        <ul>
        {todos.map((item) => {
            return (
                <>
                <li key={item.id} className="todo-item">
                    <div className="task-and-checkbox">
                        <input type="checkbox" className="round-checkbox"></input>
                        {item.title}
                    </div>
                    <IconCross/>
                </li>
                <hr/>
                </>
            )
        })}
        <div id="end-of-list">
            <span>x items left</span>
            <span>Clear completed</span>
        </div>
        </ul>
        </section>
    );
}

export default TodoList;