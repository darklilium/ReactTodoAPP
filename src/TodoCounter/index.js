import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';



function TodoCounter() {
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return (
        <div className='TodoCounter-title-wrapper'>
            <p className='TodoCounter-title'>What's up today?</p>
            <p className='TodoCounter-todos-count'>TO-DOS Completed: {completedTodos}/{totalTodos} </p>
 
        </div>
          )
}

export {TodoCounter};