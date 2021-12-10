import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App/index';

function App({greetType, name}) {
    return (
        <h1>!{greetType} {name}!</h1>
    );
}


function withGreeting(WrappedComponent) { //any other high order fx
    return function WrapperComponentWithGreeting(greetType) {
        return function TrulyComponent(props) {  //always a react component (always the last return)
            return (
                <React.Fragment>
                    <WrappedComponent {...props} greetType={greetType}/>                   
                    <p>We are here to get along with Wrapper comp.</p>
                </React.Fragment>
            )
        }
    }
}

const AppWithGreeting = withGreeting(App)('Heyaa');

ReactDOM.render(
    // <App greetType='buenas' name='eve'/>,
    <AppWithGreeting name='eve'/>,
    document.getElementById('myApp')
);


