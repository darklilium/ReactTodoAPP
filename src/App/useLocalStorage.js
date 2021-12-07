import React from "react";

//custom react hook!
function useLocalStorage (itemName, initialValue) { //'TODOS_V1'
    const [error, setError] = React.useState(false); //changes if error on loading
  
    const [loading, setLoading] = React.useState(true); //save the loading status and creates a setter to change the loading status
   
    //For changing the state for the todoList previously obtained
    const [item, setItem] = React.useState(initialValue);  //saves the item and creates a setter fx
  
    React.useEffect(()=>{
      setTimeout(()=>{ //simulating a promise
        try {
           //get TODOS from localstorage (LS)
           const localStorageItem = localStorage.getItem(itemName);
  
           let parsedItem = initialValue;
           //if there isnt saved todo in LS
           if(!localStorageItem){
             localStorage.setItem(itemName, JSON.stringify(initialValue));
           //if there are some :)  
           }else{
             parsedItem = JSON.parse(localStorageItem); //parse the LS item if there is one
           }
           
           setItem(parsedItem); //changes the item status to the saved one
   
           //it is loaded alr.
           setLoading(false); //when finishes loading
        } catch (error) {
          setError(error) //if error when loading
        }
      },2000)
    });
    
   
    //To modify the state and save it on localstorage
    const saveItem = (newItem) => {
      try {
        const stringifiedTodos = JSON.stringify(newItem); //stringfy it
        localStorage.setItem(itemName, stringifiedTodos); //save it on LS
       // setItem(newItem); //change the state of new item in case.
      } catch (error) {
        setError(error) //if errors on loading.
      }
     
    }
    //Returning the item and the fx for saving on localstorage and use it on APP. This will be used in a Provider (TodoProvider).
    return {
      item, //returning the todo object obtained from localstorage
      saveItem, //returning this fx in case if its needed
      loading, //returning the state of loading var
      error, //returning the state of error var
      setItem, //for changing the state of todo list but not modify the LS
    };
  
  }

  export {useLocalStorage};