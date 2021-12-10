import React from "react";
import { useTodos } from './useTodos';
import { TodoCounter }from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from '../Modal';
import { TodoHeader} from '../TodoHeader';
import { TodoError } from '../TodoError';
import { TodoLoading } from "../TodoLoading";
import { EmptyTodos } from "../EmptyTodos";
import { EmptySearchResults } from '../EmptySearchResults';

function App() {
  const {
    error, 
    loading, 
    findRelatedTodos, 
    completeTodo, 
    deleteTodo, 
    openModal, 
    setOpenModal, 
    createTodo, 
    modalText, 
    setModalText,
    totalTodos, completedTodos,
    searchValue, setSearchValue} = useTodos();


    return(
      <React.Fragment>
         <div className="todo-header-wrapper">
            <TodoHeader loading={loading}> 
                <TodoCounter
                    totalTodos={totalTodos}
                    completedTodos={completedTodos}
                />
               <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </TodoHeader>
               
          </div>
  
        <div className="todolist-inner-wrapper">

                <TodoList 
                    error={error}
                    loading={loading}
                    totalTodos = {totalTodos}
                    findRelatedTodos = {findRelatedTodos}
                    searchText = {searchValue}
                    onError={()=> <TodoError /> }
                    onLoading={()=> <TodoLoading /> }
                    onEmptyTodos={()=> <EmptyTodos /> }
                    onEmptySearchResults={ (searchText)=> <EmptySearchResults searchText={searchText}></EmptySearchResults> }
                    // render={ (todo,index) => (
                    //     <TodoItem 
                    //         key={index} 
                    //         text={todo.text} 
                    //         completed={todo.completed}
                    //         onComplete = {()=>completeTodo(index)}
                    //         onDelete = {()=>deleteTodo(todo.id)}
                    //     />)}

                   >
                    { (todo, index) => (
                        <TodoItem 
                            key={index} 
                            text={todo.text} 
                            completed={todo.completed}
                            onComplete = {()=>completeTodo(index)}
                            onDelete = {()=>deleteTodo(todo.id)}
                        />
                    )}            
                </TodoList>

              {/* <TodoList>
              
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
              </TodoList> */}
         
        </div>
          
            {!!openModal && (
                <Modal setOpenModal={setOpenModal} modalText={modalText} />             
            )}
          
            <CreateTodoButton setOpenModal={setOpenModal} createTodo={createTodo} setModalText={setModalText} /> 
    
  
          
      </React.Fragment>  
      );
}

export default App;
