import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';

function TodoSearch() {

    const { searchValue, setSearchValue} = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value)
        
    }

 
    return (
        <React.Fragment>
         
        
            <input onChange={onSearchValueChange} value={searchValue}
             className='inputSearchTodo' 
             id='search' placeholder='SEARCH/CREATE TODOS HERE'></input>
           
        </React.Fragment>
        
    )
}

export {TodoSearch};