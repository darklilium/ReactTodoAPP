import React from "react";

function EmptySearchResults (props){
    return (
        <p>No results for {props.searchText} </p>
    );
}

export { EmptySearchResults }

