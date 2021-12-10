import React from "react";

function TodoHeader({ children, loading }){
    

    return (
        <React.Fragment>
           {
                React.Children
                .toArray(children)
                .map(child => React.cloneElement(child, { loading }))
           } 
        </React.Fragment>

 
    )
}

export {TodoHeader}