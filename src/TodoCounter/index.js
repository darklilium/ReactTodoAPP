import React from "react";
import './TodoCounter.css';



function TodoCounter({totalTodos, completedTodos}) {
   
    return (
        <div className='TodoCounter-title-wrapper'>
            <p className='TodoCounter-title'>What's up today?</p>
            <p className='TodoCounter-todos-count'>TO-DOS Completed: {completedTodos}/{totalTodos} </p>
 
        </div>
          )
}

export {TodoCounter};