import React from "react";
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {

  

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