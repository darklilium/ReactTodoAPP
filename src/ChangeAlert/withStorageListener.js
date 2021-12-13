import React from "react";


function withStorageListener(WrappedComponent) {
    return function WrapperComponentWithStorageListener (props){

        const [storageChange, setStorageChange] = React.useState(false); //is there any change in any other window.

        window.addEventListener('storage', (change) => {
            if(change.key === 'TODOS_V1') {
               
                setStorageChange(true);
                console.log('changes in TODOS_V1');
            }
        });

        const toggleShow = () =>{
            props.sincronize();
            setStorageChange(false);
            
        }

        return (
            <WrappedComponent 
                show={storageChange}
                toggleShow={toggleShow}    
                >
            </WrappedComponent>
        ) 
       
    }
}


export { withStorageListener }