import React from "react";
import { TodoCounter }from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { Modal } from '../Modal';

function AppUI (){

    const {error, loading, findRelatedTodos, completeTodo, deleteTodo, 
            openModal, setOpenModal, createTodo, modalText, setModalText} = React.useContext(TodoContext);


    return(
    <React.Fragment>

        <TodoCounter/>  
    
       <div className="todo-inner-wrapper">

        <TodoSearch/> 

            <TodoList>
            
                {error && <p>Panic, there is an error coming!</p>}
                {loading && <p>Loading, dont panic!</p>}
                {(!loading && !findRelatedTodos.length) && <p>Make ur first todo</p>}
    
                {findRelatedTodos.map((todo,index) => (
                <TodoItem 
                    key={index} 
                    text={todo.text} 
                    completed={todo.completed}
                    onComplete = {()=>completeTodo(index)}
                    onDelete = {()=>deleteTodo(todo.id)}
                />))}
            </TodoList>
       
        </div>
        <CreateTodoButton setOpenModal={setOpenModal} createTodo={createTodo} setModalText={setModalText} /> 
      
        
        {!!openModal && (
            <Modal setOpenModal={setOpenModal} modalText={modalText} />             
        )}
        

        
    </React.Fragment>  
    );
}

export {AppUI};