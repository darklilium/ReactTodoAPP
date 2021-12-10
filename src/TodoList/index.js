import React from "react";
import './TodoList.css';

function TodoList(props) {

    const renderFunc = props.render || props.children;

    return (
       <section className='TodoList'>
           {props.error && props.onError()}

           {props.loading && props.onLoading()}

           {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

           {/* {props.findRelatedTodos.map((todo,index)=> props.render(todo,index))} */}   {/*this is the same as the next line*/}
           {props.findRelatedTodos.map(renderFunc)}

            {/* if there is todos in the list (any number different of 0 ) and 
            there is none searchTodos */}
           {(!!props.totalTodos && !props.findRelatedTodos.length) && props.onEmptySearchResults(props.searchText) }

       </section>
    )
}

export {TodoList};