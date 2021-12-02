import React from "react";
import ReactDOM from "react-dom";
import './Modal.css';


function Modal(props,{children} ){

    const onClose = () =>{
        
        props.setOpenModal(prevState => !prevState)

    }

    return ReactDOM.createPortal(
        <div className='Modal-bg'>
            <div className='Modal-Container'>
             {children}
             <p>{props.modalText}</p>
             <span className='Modal-btnClose' onClick={onClose}>x</span>
            </div>
            
        </div>, document.getElementById('myModal')
    );
}


export {Modal}