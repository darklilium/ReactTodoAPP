import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton (props) {

    
    const onClickButton = () => {

       if(document.getElementById('search').value){
           console.log("tx", document.getElementById('search').value);
           props.createTodo(document.getElementById('search').value)
           
       } else{
           props.setModalText('Sorry, we couldnt add your TODO right now :(');
           console.log("tx2", document.getElementById('search').value);
         
       }
       props.setOpenModal(true)
      
    }

    return (
        <button className='btnCreateTodo'
        onClick={onClickButton}>NEW</button>
    );
}

export { CreateTodoButton };