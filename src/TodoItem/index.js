import React from "react";
import './TodoItem.css';

function TodoItem(props) {

    return (
        <div className='TodoItem'>
         
            <label className="TodoItem-custom-checkbox">
                <input type="checkbox" id='checkboxStatus' className={`TodoItem-checkbox ${props.completed && 'TodoItem-checkbox-active'}`}/>
                <span onClick={props.onComplete} className={`TodoItemSpanBox ${props.completed && 'TodoItemSpan'}`}></span>
            </label>
           <p>{props.text}</p>            
            <button  className='TodoItem-button-deleteItem' onClick={props.onDelete}>X</button>
        </div>
            
           
            
        
    )
}

export {TodoItem}