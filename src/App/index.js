import React from "react";
//import { AppUI  } from "./AppUI";
//import {TodoProvider} from '../TodoContext';


function App() {
  const [state, setState] = React.useState('Shared state');
  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter/>
        <TodoSearch />
      </TodoHeader>
      <TodoList>
        <TodoItem state={state}/>
      </TodoList>
    </React.Fragment>
     
   
  );
}

function TodoHeader( {children}) {
  return (
    <header>
      {children}
    </header>
   
  
  );
}

function TodoList( {children }) {
  return (
    <section className="TodoList-container">
      {children}
    </section>
  );
}

function TodoCounter({props}) {
  return <p>Todo Counter</p>;
}

function TodoSearch() {
  return <p>TodoSearch</p>;
}

function TodoItem({state}) {
  return <p>TodoItem: {state}</p>;
}


// function App() {

//   return (
//     <TodoProvider>
//       <AppUI />
//     </TodoProvider>
    

//   );
// }

export default App;
