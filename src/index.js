import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App/index';

function App({greetType, name}) {
    return (
        <h1>!{greetType} {name}!</h1>
    )
}


function withWhatever(WrappedComponent) { //any other high order fx
    return function TrulyComponent(props) {  //always a react component (always the last return)
        return (
            <React.Fragment>
                <WrappedComponent {...props}/>                   
                <p>We are here to get along with Wrapper comp.</p>
            </React.Fragment>
        )
    }
}

const AppWithWhatever = withWhatever(App);

ReactDOM.render(
    // <App greetType='buenas' name='eve'/>,
    <AppWithWhatever greetType='buenas' name='eve'/>,
    document.getElementById('myApp')
);


