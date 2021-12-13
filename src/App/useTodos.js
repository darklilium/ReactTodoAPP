import React from "react";
import { useLocalStorage } from "./useLocalStorage";


//Custom hook instead of provider
function useTodos() {
    //variable : how you name them right now.
    //useLocalStorage is a custom hook that returns an object with the item,
    const {
        item: todos, 
        saveItem: saveTodos, 
        loading,
        error,
        setItem: changeList,
        sincronize: sincronizeTodos,
      } = useLocalStorage('TODOS_V1', []);
    
      //For seach a todo and fx for changing value
      const [searchValue, setSearchValue] = React.useState(''); //state and setter state for searchValue, default ''
       //for modal
      const [openModal, setOpenModal] = React.useState(false);
      const [modalText, setModalText] = React.useState('');

      //get the todo counter: completed vs total 
      const completedTodos = todos.filter(todo=> !!todo.completed).length; //get the todos that are completed (how many)
      const totalTodos = todos.length; //get the total of todos
    
      //get the todos
      let findRelatedTodos = [];
      
      if(!searchValue.length>=1){ //if there are not searchvalue, replace the todos with the todos from LS (Show them all)
        findRelatedTodos = todos;
      }else{
        findRelatedTodos = todos.filter(todo=> { //filter the todos according to the user input
          const todoText = todo.text.toLowerCase(); //make it both lowercase to easily compare them
          const searchText = searchValue.toLowerCase(); //this one too
          return todoText.includes(searchText) //and then look if one includes the other one.
        });
      }
    
     
      //function that creates a todo
      const createTodo = (text) =>{
        const newTodos = [...todos];
        newTodos.push({
          text,
          completed: false,
          id: todos.length+1,
        });

        setModalText('TODO has been added to the list !');
        saveTodos(newTodos);
        changeList(newTodos);
      }

      //function that make a complete todo and change the symbol to check or not checked
      const completeTodo = (index) => {
        console.log(index);
        //const todoIndex = todos.findIndex(todo=> todo.id === id); //finding the index selected based on text
        const newItem = [...todos]; //get a new array of todos state replacement
        if(!newItem[index].completed){
          newItem[index].completed = true; //change the completion to true
        }else{
          newItem[index].completed = false;
        }
       
        //save in localstorage and then modify the state in there as well 
        saveTodos(newItem);
        changeList(newItem);
        
      }
    
      //funciton that deletes a todo based on text/item selected
      const deleteTodo = (todoID) => { 
       
        const todoIndex = todos.findIndex(todo=> todo.id === todoID); //finding the index selected based on todoID
        const newItem = [...todos]; //get a new array of todos for state replacement
        newItem.splice(todoIndex , 1); //remove the item based on index in array
        //save in localstorage and then modify them
        changeList(newItem);
        saveTodos(newItem);
      

      }

    

    return (
        {
            loading ,
            error ,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            findRelatedTodos ,
            completeTodo,
            deleteTodo ,
            openModal,
            setOpenModal,
            createTodo,
            modalText,
            setModalText,
            sincronizeTodos,
            
        }
    )
}

export { useTodos }
